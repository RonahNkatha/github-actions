import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/techquiz")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.error(error);
  });

export default mongoose.connection;
