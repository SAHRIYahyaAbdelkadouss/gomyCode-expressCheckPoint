const express = require("express");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/home", (req, res) => {
  res.render("Home", { name: "John" });
});

app.get("/navbar", (req, res) => {
  res.render("Navbar");
});

const PORT = 3000;
app.listen(PORT, (err) => {
  if (err) return console.error(err);
  return console.log("port is listening on:", PORT);
});
