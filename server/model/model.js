const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    quantity:{
        type:Number,
        required: true
    }

})

const Candydb = mongoose.model('Candydb',schema);

module.exports = Candydb;