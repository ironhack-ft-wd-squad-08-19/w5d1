const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.use(express.static("public"));

// if we don't use urlencoded, req.body is undefined
app.use(express.urlencoded({ extended: false }));

const greet = () => {
  return (req, res, next) => {
    console.log("Hello!");
    req.foo = "bar";
    next();
  };
};

app.get("/", greet(), (req, res) => {
  console.log("GET /");
  console.log(req.foo);
  res.render("form");
});

app.use(greet());

app.post("/login", (req, res) => {
  console.log("req.body: ", req.body);
  //   login the user
  //   res.render("content");
});

app.listen(3000);
