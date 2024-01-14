import mongoose from "mongoose";

const MONGO_HOST = process.env.MONGO_HOST || "localhost";
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || "builder_engine_2022";
const MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME || "";
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD || "";
const MONGO_BUILDER_DB_TYPE = process.env.MONGO_BUILDER_DB_TYPE || "dev";

const connection = {};

const connectDB = async () => {
  try {
    if (connection.isConnected) {
      return;
    }
    let username = MONGO_DB_USERNAME;
    username = username.trim();
    const host = MONGO_HOST;
    const port = MONGO_PORT;
    const dbName = MONGO_DB_NAME;
    const dbType = MONGO_BUILDER_DB_TYPE;
    let mongoUrl = "";

    console.log("username", username.length);

    if (username && username.length > 0) {
      console.log("I have username");
      mongoUrl = `mongodb://${username}:${MONGO_DB_PASSWORD}@${host}:${port}`;
    } else {
      mongoUrl = `mongodb://${host}:${port}`;
    }

    const options = {
      dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    console.log("mongoUrl", mongoUrl);
    if (dbType === "dev") {
      options["autoIndex"] = false;
      options["maxPoolSize"] = 1000;
      options["socketTimeoutMS"] = 45000;
    }
    const db = await mongoose.connect(mongoUrl, options);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("error", error);
    throw new Error("Error connecting to database", error);
  }
};

mongoose.connection.once("open", () => {
  console.log("Connected to Database");
});

mongoose.connection.on("error", (err) => {
  console.error("********** $$$$$$ ********");
  console.error("Connection Broke from Database");
  console.error(`err :>> ${err}`);
  console.error("********** $$$$$$ ********");
});

export default connectDB;
