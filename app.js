const express  = require("express");
const mongoose = require("mongoose");
const router = require("./router/ProductRouter");
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(router);

mongoose.set('strictQuery', false);

mongoose.connect(process.env.Mongodb_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("connected to DB Successfully!");
  }).catch(err=>{
    console.log('err');
    console.log(err);
  })
    

app.listen(port,() => {
    console.log('listening on port ' + port);
})