require("./db/mongoose");
const express = require("express");
const cors = require("cors");
const productRouter = require("./routers/products");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", productRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is up on port " + PORT);
});
