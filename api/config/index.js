import dotenv from "dotenv";

//dotenv.config({});
dotenv.config();

export default {
  database: {
    uri: process.env.DB_URI,
  },
  server: {
    port: process.env.PORT,
  },
};
