const mongoose = require("mongoose");
mongoose.set("strictQuery",true);

async function connectDB(url){
    try {
        mongoose.connect(url);
        return msg ="Connected to database";

    } catch (error) {
        console.log(error)
        return msg="Error while connecting to database"
    }
};

module.exports = {connectDB};