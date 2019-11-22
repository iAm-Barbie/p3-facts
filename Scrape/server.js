const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const ScraperRoutes= express.Router();
const PORT = 4000

let Scraper = require('./Scraper')

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/Scraper', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log("MongoDB Database successful")
})

ScraperRoutes.route('/').get(function(req, res){
    Scraper.find(function(err, Scraper){
        if(err){
            console.log(err)
        } else { 
            res.json(Scraper);
        }
    });
});


ScraperRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    Scraper.findById(id, function(err, Scraper){
        res.json(Scraper);
    });
});

ScraperRoutes.route('/add').post(function(req, res){
    let Scraper = new Scraper(req.body);
    Scraper.save()
        .then(Scraper => {
            res.status(200).json({'Scraper': 'Scraper added Successfully'})
        })
        .catch(err => {
            res.status(400).send("Adding New Scrape Failed")
        });
});

ScraperRoutes.route('/update/:id').post(function(req, res){
    Scraper.findById(req.params.id, function(err, Scraper){
        if(!Scraper)
            res.status(404).send('Data Is Not Found');
        else
            Scraper.Scraper_description = req.body.Scraper_description;
            Scraper.Scraper_responsible = req.body.Scraper_responsible;
            Scraper.Scraper_priority = req.body.Scraper_priority;
            Scraper.Scraper_completed = req.body.Scraper_completed;

            Scraper.save().then(Scraper => {
                res.json('Scraper Updated');
            })
            .catch(err => {
                res.status(400).send("Update not Possible");
            });
    });
});

app.use('/Scraper', ScraperRoutes);

app.listen(PORT, function(){
    console.log("Server is Running on Port " + PORT)
});