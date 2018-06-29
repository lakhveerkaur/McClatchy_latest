const express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path"),
  http = require("http"),
  app = express();


//api file for interacting with mongodb
const api = require('./server/routes/loki.js');

//Parser to get the request response
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Angular dist output folder to serve all static files
app.use(express.static(path.join(__dirname,'dist/app-v6')));


app.use('/',(req, res, next) => {
  console.log('inside routes');
  next();
}, api);



// Send all other requests to Angular app
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'dist/app-v6/index.html'));
});

const  PORT = process.env.PORT || 3000

app.set('port',PORT);

const server = http.createServer(app);

server.listen(PORT,() => console.log(`Running on localhost:${PORT}`));
