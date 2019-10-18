import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost/demoBackend", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
// connection test
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Database connected");
});

routing();
// ********** ROUTING **********
import TestRoute from "./src/Routes/TestRoute";
function routing() {
  app.use("/api/v1/test", TestRoute);
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("SERVER Started on port :: ", port));
