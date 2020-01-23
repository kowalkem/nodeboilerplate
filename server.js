//imports
const express = require("express");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

//instantiate express server
const app = express();

//load .env
dotenv.config();

//setup database connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("Connection to mongoDB Successful!"));

const userSchema = new mongoose.Schema({
    user: String,
    exercises: [{description: String, duration: Number, date: Date}]
});
const User = mongoose.model("User", userSchema);

//mount middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/public")));

//mount paths
app.get("/", (req, res) => res.sendFile(path.join(__dirname + "/view/index.html")));
app.post("/api/exercise/new-user", (req, res) => {
    User.findOne({user: req.body.username}, (err, data) => {
        if (err) return console.log(err);
        if (data) {
            res.json({username: data.user, message: "specified username already exists under:", _id: data._id});
        } else {
            const newUser = new User({user: req.body.username});
            newUser.save((err, data) => {
                if (err) return console.log(err);
                res.json({username: data.user, _id: data._id});
            });
        }
    });
});
app.post("/api/exercise/add", (req, res) => {
    User.findOne({_id: req.body.userId}, (err, data) => {
        if (err) return console.log(err);
        if (!data) {
            res.send("Unknown user id");
        } else {
            data.exercises.push({
                description: req.body.description,
                duration: req.body.duration,
                date: req.body.date
            });
            data.save((err, data) => {
                if (err) return console.log(err);
                res.json({
                    username: data.user,
                    _id: data._id,
                    description: req.body.description,
                    duration: req.body.duration,
                    date: req.body.date
                });
            });
        }
    });
});
//rkXfibw-U    =>     user id to use on fcc sample page
//start server
const port = process.env.PORT | 3000;
app.listen(port, () => console.log("Server is listening on port: " + port));