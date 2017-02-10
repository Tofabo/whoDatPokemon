module.exports = function(app){
    var bodyParser = require('body-parser');
    var path = require('path');
    var mongoose = require('mongoose');
    var Pokemon = mongoose.model('Pokemon');

    app.get('/', function(req, res) {
        console.log("The page has loaded");
            var id = Math.floor((Math.random() * 151) + 1);
            var id2 = Math.floor((Math.random() * 151) + 1);
          
        res.render('index', {id : id, id2: id2 });
    });

    app.post('/pokemon', function(req, res) {
        console.log("POST DATA", req.body);
        var pkmn = new Pokemon()
        pkmn.user_name = req.body.user_name;
        pkmn.pokemon_name = req.body.pokemon_name;
        pkmn.id = req.body.id;
        pkmn.id2 = req.body.id2;
        pkmn.save(function(err) {
            if(err) {
                console.log("Something went wrong!");
            } else {
                console.log("Successfully added a Pkmn!");
            }
        })
        res.redirect('/display');
    });

    app.get('/display', function(req, res) {
        Pokemon.find({},function(err, data){
        console.log(data);
        console.log("We're displaying things?");
        res.render('display', {data : data })
        });

        // res.render('display', data)
    })

}