const express = require("express");
const app = express();

const database = require("./config/database");

const dotenv = require("dotenv");
dotenv.config();    

database.connect();

const PORT = 4000 || process.env.PORT

app.use(express.json());

app.get("/",(req,res) => {
    return res.status(200).json({
        success: true,
        message: "Your server is up and running",
    });
});

app.listen(PORT,() => {
    console.log(`App is running at ${PORT}`)
})