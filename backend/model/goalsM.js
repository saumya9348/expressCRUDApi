const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
    {
        name:String,
        phno:Number,
        age:Number,
        text : String,
    },
    {
        timestamp : true,
    }
)

module.exports = mongoose.model("Goal",goalSchema);