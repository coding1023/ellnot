const { rejects } = require("assert");
const express = require("express");
const app = express();
app.use("/public", express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", __dirname + "/public/views");
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  res.locals.title = "Home Page"; 
  res.render("index");
});

app.get("/contact", function (req, res) {
    res.locals.title = "Contact Us Page"; 
  res.render("contact");
});
app.get("/about", function (req, res) {
      res.locals.title = "About Us Page"; 

  res.render("about");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function () {
  console.log("Server started on port 3000");
});




