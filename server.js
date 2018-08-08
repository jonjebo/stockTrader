const express = require("express");
const session = require('express-session');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: "sdfghjfdEW$T%#$^*%I&ORYUFTKJFHTRGTR#T$5t",
    resave: true,
    saveUninitialized: false,
    cookie:{
      maxAge: (1000*60*60*24*14)
    }
 }))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//add routes, both api and view
app.use(routes);

//Set up promises with mongoose
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/P3",
  { useNewUrlParser: true }
);

// Start the API server
app.listen(PORT,()=>{
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});