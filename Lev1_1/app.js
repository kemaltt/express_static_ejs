const express = require("express");
const fs = require("fs");

const app = express();

const nav = require("./models/nav.json");

// const nav = JSON.parse(fs.readFileSync(`${__dirname}/models/nav.json`));
console.log(nav);

app.set("view engine", "ejs");

app.use(express.static("public"));

nav.map((navItem) => {
  app.get(navItem.url, (_, res) => {
    res.render(navItem.url === "/" ? "home" : navItem.url.slice(1), {
      navItem: nav,
    });
  });
});

// app.get("/", (req, res) => {
//   res.render("home.ejs", { navItem: nav });
// });

// app.get("/team", (req, res) => {
//   res.render("team.ejs", { navItem: nav });
// });
// app.get("/about", (req, res) => {
//   res.render("about.ejs", { navItem: nav });
// });
// app.get("/contact", (req, res) => {
//   res.render("contact.ejs", { navItem: nav });
// });

app.use((_, res) => {
  res.render("error.ejs");
});

module.exports = app;
