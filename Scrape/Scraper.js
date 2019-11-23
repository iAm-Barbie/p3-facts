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
    $("article").each(function(i, element) {
      var result = {};

      // result.title = $("h2.entry-title").text();
      // result.link = $(this).children().attr("href");
      // result.img = $("img").attr("href");
      // result.div = $("main").attr("href");
      result.title = $(this)
          .find("div")
          .find("img")
          .find("a")
          .find("link")
          .text();
      result.link = $(this)
          .find("a")
          .attr("href");

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

