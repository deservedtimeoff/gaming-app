const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    poster: String,
    title: String,
    subtitle: String,
    isFree: Boolean,
    price: String
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;