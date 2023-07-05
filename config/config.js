const dotenv  = require("dotenv")
dotenv.config();

const developmentConfig = {
  username: process.env.USER_NAME || "",
  password: process.env.PASS_WORD || "",
  host: process.env.HOST || "",
  database: process.env.DATA_BASE || "",
  port: process.env.PORT || 5432,
  dialect: "postgres"
}

const testConfig = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATA_BASE,
  port: process.env.PORT,
  dialect: "postgres"
}

const productionConfig = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATA_BASE,
  port: process.env.PORT,
  dialect: "postgres"
}
console.log(developmentConfig.username)

module.exports = 
{
  development: developmentConfig,
  test: testConfig,
  production: productionConfig
}
