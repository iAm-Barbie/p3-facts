const request = require('request');
const cheerio = require('cheerio');
var mongoose = require("mongoose");

const db = require('./models');

mongoose.connect("mongodb://localhost/scraper", { useNewUrlParser: true });

request("http://www.sixprizes.com/", (error, response, html)=>{
  if(!error && response.statusCode == 200){
    const $ = cheerio.load(html);
    $("a.entry-title-link").each(function(i, element) {
      var result = {};

      result.title = $(this).text();
      result.link = $(this).attr("href");

      // console.log(result.link)
      db.Article.create(result)
      .then(function(dbArticle){
        console.log(dbArticle);
      })
      .catch(function(err){
        return response.json(err);
      })
    });
  }
})

