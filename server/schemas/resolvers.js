const { AuthenticationError } = require('apollo-server-express');
const { User, Order, Category, Product } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
          },

          products: async (parent, { category, name }) => {
            const params = {};
      
            if (category) {
              params.category = category;
            }
      
            return await Product.find(params).populate('category');
          },
          // get products
          product: async (parent, { _id }) => {
            return await Product.findById(_id).populate('category');
          },

       user: async () => {
         return User.find()
         .select('-__v -password')
         .populate('products')
       },

       user: async (parent, {name}) => {
         return User.findOne({name})
         .populate('products')
       },

        // order(photo) query here?
        order: async () => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.products',
                    populate: 'category'
                  });

                  return user.orders.id(_id);
            } 
        },
        // checkout query here?
        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const order = new Order({ products: args.products });
            const line_items = [];

            const { products } = await order.populate('products').execPopulate();

            for (let i = 0; i < products.length; i++) {
                const photo = await stripe.products.create({
                  name: products[i].name,
                  description: products[i].description,
                  images: [`${url}/images/${products[i].image}`]
                });
        
                const price = await stripe.prices.create({
                  photo: photo.id,
                  unit_amount: products[i].price * 100,
                  currency: 'usd',
                });
        
                line_items.push({
                  price: price.id,
                  quantity: 1
                });
              }

              const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`
              });

              return { session: session.id };
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        //  (order) mutation here?
        addOrder: async (parent, { products }) => {
            console.log(context);
            if (context.user) {
                const order = new Order({ products });
        
                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
        
                return order;
              }

        },

        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true  });
            }
        },
        // updatePhoto here?
        updatePhoto: async (parent, { _id, quantity }) => {
            const decrement = Math.abs(quantity) * -1;
      
            return await Photo.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
          },
       // get user by email
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    }
};

module.exports = resolvers;