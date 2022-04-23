const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connect with the use name : ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB