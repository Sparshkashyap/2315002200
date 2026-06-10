require("dotenv").config();

const axios = require("axios");

const {
  VALID_STACKS,
  VALID_LEVELS,
  VALID_PACKAGES
} = require("./constants");

async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {

    if (!VALID_STACKS.includes(stack)) {
      throw new Error("Invalid stack");
    }

    if (!VALID_LEVELS.includes(level)) {
      throw new Error("Invalid level");
    }

    if (!VALID_PACKAGES.includes(packageName)) {
      throw new Error("Invalid package");
    }

    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;

  } catch (error) {

    if (error.response) {
      console.error(
        "Logging API Error:",
        error.response.data
      );
    } else {
      console.error(
        "Logging Failed:",
        error.message
      );
    }
  }
}

module.exports = Log;