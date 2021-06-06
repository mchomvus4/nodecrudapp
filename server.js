//this is our http server
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
 const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection')
const app = express();

dotenv.config({path:'config.env'});
const PORT = process.env.PORT
//log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB();


//bodyParser requests
app.use(bodyParser.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs");
// app.set("views",path.resolve(__dirname,"view/html"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

//load routers
  app.use('/',require('./server/routes/router'))



app.listen(PORT,()=>{console.log(`Server is runing on http://localhost:${PORT}`)})

