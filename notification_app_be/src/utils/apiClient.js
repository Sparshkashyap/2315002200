require("dotenv").config();

const axios = require("axios");

const apiClient = axios.create({
  headers: {
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
  }
});

module.exports = apiClient;