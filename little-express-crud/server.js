const express = require("express");
const app = express();
app.use(express.json());

const numbersArray = [1, 2, 3, 4, 5, 6];

app.get("/", (req, res) => {
  res.send(numbersArray);
});

app.post("/", (req, res) => {
  try {
    const { number } = req.body;
    if (numbersArray.includes(+number))
      throw new Error("the number already exist");
    numbersArray.push(+number);
    res.send(numbersArray);
  } catch (err) {
    res.status(400).send("Something broke! \n" + err);
  }
});

app.delete("/", (req, res) => {
  try {
    const { number } = req.query;
    if (!numbersArray.includes(+number))
      throw new Error("the number doesn’t exist");
    const index = numbersArray.indexOf(parseInt(+number));
    if (index !== -1) {
      numbersArray.splice(index, 1);
    }
    res.send(numbersArray);
  } catch (err) {
    res.status(400).send("Something broke! \n" + err);
  }
});

app.put("/", (req, res) => {
  try {
    const { number: addNumber } = req.body;
    const { number: removeNumber } = req.query;
    if (!addNumber || !removeNumber) throw new Error("Missing number");
    if (!numbersArray.includes(+removeNumber)) {
      throw new Error("the number doesn’t exist");
    }
    const index = numbersArray.findIndex((n) => n === +removeNumber);
    numbersArray[index] = addNumber;
    res.send(numbersArray);
  } catch (err) {
    res.status(400).send("Something broke! \n" + err);
  }
});

app.listen(8080, () => {
  console.log("Server is up on port 8080");
});
