const mongoose = require('mongoose');

const SerieSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true,
    }
});

mongoose.model('Serie', SerieSchema);