const express = require("express");
const app = express();
const path = require("path");


console.log(__dirname);
app.use(express.static(path.join(__dirname, "/")));
app.use(express.static(path.join(__dirname, "public")));



var port = process.env.PORT || 3000
app.listen(port, ()=>console.log("Listening to port " + port));