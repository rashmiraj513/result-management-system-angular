require('dotenv').config();
const mongoose = require('mongoose');

// For Localhost
const uri = "mongodb://localhost:27017/resultDB";

// DOTENV constants
const password = process.env.PASSWORD;
const db = process.env.DATABASE;
const user = process.env.USER;
const clusterURL = process.env.URL;

// For Remote
// const uri = "mongodb+srv://" + user + ":" + password + "@" + clusterURL + db +"?retryWrites=true&w=majority";

const connectDB = async() => {
  try {
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch(err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;