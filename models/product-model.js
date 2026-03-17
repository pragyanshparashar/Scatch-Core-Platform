const mongoose = require('mongoose');

const productSchema = ({
    image: String,
    name: String,
    price: Number,
    disccount: {
        tyepe: Number,
        default: 0,
    },
    bgcolour: String,
    panelcolour: String,
    textcolour: String,
})


module.exports = mongoose.model('product', productSchema);