import express from "express";
import bodyParser from "body-parser";
import path from "path";
const __dirname = path.resolve();

const app = express();



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname ,'../client', 'index.html'));
});

app.listen("3000", (req, res)=>{
    console.log("Server Started at Port 3000.");
});