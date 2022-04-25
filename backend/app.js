const path = require("path");
const hbs = require("hbs"); 
const dotenv = require("dotenv").config();
// connect db
const dbconn = require("./config/dbconn");

const express = require("express");

const app = express(); //Initialize express

const PORT = process.env.PORT || 8007 ;

const getRoutes = require("./routes/goalsRoutes");


// for html form data getting
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// for error handle by own middleware
const {errHandeller} = require('./middleware/errorHandeller');
app.use(errHandeller);

// calling dbconn
dbconn();

const viewsPath = path.join(__dirname,"./templates/views");
console.log(viewsPath);
app.set("view engine","hbs");
app.set("views",viewsPath);
hbs.registerPartials(path.join(__dirname,"./templates/partials"));

app.use("/api/goals",getRoutes);

app.get("/",(req,res)=>{
    res.status(200).json({message:"Im in root directoty"});
})


app.listen( PORT, () => console.log(`Port running on ${PORT}`) );