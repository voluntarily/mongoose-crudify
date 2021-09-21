const mongoose = require('mongoose')

// process.env now has the keys and values you defined in your .env file.
require('dotenv').config()

const connectionString = process.env.MONGO_TEST_SERVER

mongoose.connect(connectionString, {
  useMongoClient: true
  /* other options */
})

module.exports = mongoose
