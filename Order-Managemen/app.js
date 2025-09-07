const express = require("express");
const { createConnection } = require("./config/db");
const {OrderRoutes } = require("./routes/order.routes");


const app = express();
app.use(express.json());
createConnection();

app.use("/OrderSystem" , OrderRoutes);


app.listen(8000, () => {
  console.log("🚀 Server is running on port 3000");
});

