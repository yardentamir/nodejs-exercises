const express = require("express");
const app = express();

app.get("/numbers", (req, res) => {
  res.send("data");
});
app.post("/numbers", (req, res) => {
  console.log(req.body);
});
app.delete("/numbers", (req, res) => {
  res.send("Success using delete");
});
app.put("/numbers", (req, res) => {
  res.send("Success using put");
});

app.listen(3000, () => {
  res.send("Server is up on port 3000");
});
