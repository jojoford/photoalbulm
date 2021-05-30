const {Schema, model} = require('mongoose');

const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: 'Please enter you first name',
        trim: true
      },
      lastName: {
        type: String,
        required: 'Please enter your last name',
        trim: true
      },
      email: {
        type: String,
        required: 'Please enter your email',
        unique: true
      },
      password: {
        type: String,
        required: true,
        minlength: 5
      },
      orders: [Order.schema],

      toJSON: {
        virtuals: true
      }
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);


module.exports = User;