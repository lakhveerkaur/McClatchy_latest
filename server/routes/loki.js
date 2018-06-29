const Router = require('express').Router()
    , loki = require('lokijs')
    , db = new loki('loki.json')
    , news = db.addCollection('news');

const newslist = db.addCollection('newslist');

Router.post('/saveStatus', (req, res) => {
  console.log('inside save status');
  let status = req.body.status;
  console.log('params - > ', status);
  console.log('inside save status  -- > ');
  news.insert({status: status});
});
Router.post('/saveNews', (req, res) => {
  console.log('inside save status');
  let status = req.body.status;
  console.log('params - > ', status);
  console.log('inside save status  -- > ');
  news.insert({status: status});
});

Router.get('/getStatus',(req,res) => {
  let status = news.get(1);
  let data = news.data;
  console.log('data - > ', data);
  console.log('status - > ', status);
  res.json(data);
})
module.exports = Router;
