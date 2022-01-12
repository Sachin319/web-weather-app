const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3001;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
app.use(express.static(path.join(__dirname, "../public")));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

app.get("/", (req, res) => res.render("index"));

app.get("/about", (req, res) => res.render("about"));

app.get("/weather", (req, res) => res.render("weather"));

app.get("*", (req, res) => res.render("404"));

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
