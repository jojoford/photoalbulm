// place data below that that will appear on site before any user input

const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'blackAndWhite'},
        { name: 'landscapes'},
        { name: 'portraits'}
    ]);

    console.log('categories seeded');

await Product.deleteMany();

const products = await Product.insertMany([
    {
        name: 'Happy Couple',
        category: 'blackAndWhite',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
        name: 'New Family',
        category: 'blackAndWhite',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Couple in Barn',
        category: 'blackAndWhite',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Couple against Sky',
        category: 'blackAndWhite',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Nashville Riverside',
        category: 'landscapes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Wedding landscape',
        category: 'landscapes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Lush lawn',
        category: 'lanscapes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Fam with dog',
        category: 'portraits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Baby girl',
        category: 'portraits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Couple make a Shadow',
        category: 'portraits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Woman in greyscale',
        category: 'portraits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Newborn in tutu',
        category: 'portraits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Flowergirls and boy',
        category: 'portraits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
]);

console.log('photos seeded');

await User.deleteMany();

    await User.create({
        firstName: 'Tester',
        lastName: 'Test',
        email: "tester@email.com",
        password: "password123"
    });

    console.log('users seeded');

    process.exit();
});