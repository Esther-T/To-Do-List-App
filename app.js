const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
port = 663;

app.get("/", function(req, res){
   let day = date.getDate();
    /*
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day = "";
    day = days[today.getDay()];
    */
    res.render('list', {listTitle : day, newListItem: items}) //list in views folder
    })

app.get("/work", function(req, res){
  res.render("list", {listTitle: "work list", newListItem: workItems });
});

app.post("/", function(req, res){
  let item = req.body.newItem;
  console.log(req.body.list);
  if(req.body.list === "work")
  {
    workItems.push(item);
    res.redirect("/work");
  }
  else
  {
    items.push(item);
    res.redirect("/");
  }

});

app.post("/work", function(req, res){
  var workItem = req.body.newItem;
  workItems.push(workItem);
  console.log(workItem);
  res.redirect("/work");
});

app.listen(port, function(){
  console.log("Server is running on port " + port);
});
