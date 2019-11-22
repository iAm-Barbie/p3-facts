const request = require('request');
const cheerio = require('cheerio');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Scraper = new Schema({
  Scraper_description: {
    type: String
  },
  Scraper_responsible:{
    type: String
  },
  Scraper_priority:{
    type: String
  },
  Scraper_completed: {
    type:Boolean
  }
})

module.exports = mongoose.model('Scraper', Scraper);
const db = require('./models');

mongoose.connect("mongodb://localhost/scraper", { useNewUrlParser: true });

request("http://bizstandardnews.com/", (error, response, html)=>{
  if(!error && response.statusCode == 200){
    const $ = cheerio.load(html);
    $("h2.entry-title").each(function(i, element) {
      var result = {};

      result.title = $(this).text();
      result.link = $(this).children().attr("href");

      // console.log(result.link)
      db.Article.create(result)
      .then(function(dbArticle){
        console.log(dbArticle);
      })
      .catch(function(err, res){
        return res.json(err);
      })
    });
  }
})

