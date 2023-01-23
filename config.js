const dotenv = require('dotenv');
dotenv.config();
const { HOST_URI, TOKEN, PORT } = process.env;
module.exports = {
  HOST_URI,
  TOKEN,
  PORT,
};
