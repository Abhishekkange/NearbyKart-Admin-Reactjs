const mongoose = require('mongoose');

const connectToMongoose = () => {
  const uri = process.env.MONGODBURL;

  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connection is successful.");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

// Invoke the function to establish the connection immediately
connectToMongoose();

module.exports = connectToMongoose;