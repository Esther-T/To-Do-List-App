const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
port = 663;

mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});

const itemsSchema = {
  name: String
};

const Item = mongoose.model("Item", itemsSchema);
const item1 = new Item({
  name: "Welcome to your to do list!"
});

const item2 = new Item({
  name: "Hit the + button to add a new item"
});

const item3 = new Item({
  name: "<-- Hit this to delete an item"
});

const defaultItems = [item1, item2, item3];

Item.insertMany(defaultItems, function(err){
  if (err){
    console.log(error);
  }
  else {
    console.log("successfully saved default items into db");
  }
})
app.get("/", function(req, res){
    res.render('list', {listTitle : "What's Left", newListItem: items}) //list in views folder
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
