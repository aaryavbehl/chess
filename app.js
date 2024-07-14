const express = require("express");
const socket = require("socket.io");
const http = require("http");
const { Chess } = require("chess.js");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socket(server);
const chess = new Chess();

let players = {};
let currentPlayer = "W";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index", { title: "ATBシ" });
});

io.on("connection", function(uniquesocket){
    console.log("connected")

    if(!players.white){
        players.white = uniquesocket.id;
        socket.emit()
    }
});

server.listen(3000, function (){
    console.log("Listening on Port 3000");
});