const express = require("express");
const bodyParser = require("body-parser");
const main = require("./func");


const app = express();
app.use(express.static("public"))
app.set("view engine", "ejs")

app
    .get("/", (req, res)=>{
        res.render("index")
    })




let port = process.env.PORT || 3000;
app.listen(port, ()=> {console.log(`server started on ${port}`);})



