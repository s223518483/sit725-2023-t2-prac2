let express = require("express");
let app = express();
let port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/add2number", (req, res) => {
  let num1 = parseInt(req.query.number1);
  let num2 = parseInt(req.query.number2);
  let sum = num1 + num2;
  let result = { status: 200, message: "Sucess", data: sum };
  res.json(result);
});

app.listen(port, () => {
  console.log("server start");
});
