const express = require("express");
const fs = require("fs");
const app = express();
const nav = require("./models/nav");

console.log(nav);

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs", { navItem: nav });
});

app.get("/gallery", (req, res) => {
  res.render("gallery.ejs", { navItem: nav });
});
app.get("/about", (req, res) => {
  res.render("about.ejs", { navItem: nav });
});
app.get("/works", (req, res) => {
  res.render("works.ejs", { navItem: nav });
});

app.use((_, res) => {
  res.status(404).send("404: Page not found");
});

module.exports = app;
