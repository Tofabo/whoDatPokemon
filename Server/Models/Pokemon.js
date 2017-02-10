var mongoose = require('mongoose')
var Schema = mongoose.Schema
var PokemonSchema = new Schema( {
    user_name: { type: String, required: true, minlength: 2},
    pokemon_name: { type: String, required: true },
    id: { type: Number, required: true },
    id2: { type: Number, required: true }
    
 } );

mongoose.model('Pokemon', PokemonSchema);