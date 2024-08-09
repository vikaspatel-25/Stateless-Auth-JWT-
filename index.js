const express = require("express");
require("dotenv").config();
const {connectDB} = require("./database/connection");
const {logReqRes} = require("./middlewares/logger");
const path = require("path");
const staticRouter = require("./routes/index");
const {authoriseUser} = require("./middlewares/authorise");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


const PORT = process.env.PORT;
app = express();

//connecting to database
connectDB(process.env.MONGO_URL)
.then((result)=>{console.log(result)});

//middlewares
app.use(logReqRes());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));


app.use(express.static(path.join(__dirname,'public')))

//setup ejs
app.set("view engine","ejs");
app.set("views",path.resolve(__dirname,'views'));

//routes
app.use("/",authoriseUser,staticRouter);

app.listen(PORT,()=>{console.log(`Server started at Port: ${PORT}`)})