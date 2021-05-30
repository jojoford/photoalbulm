const mongoose = require('mongoose');

const { Schema } = mongoose;

// the order is for any purchases made of the photographers photos

const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    photos: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Photo'
        }
    ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;