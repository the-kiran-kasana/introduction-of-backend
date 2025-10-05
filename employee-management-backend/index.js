const express = require("express")
const employeeRoutes = require("./routes/employee.routes")
const app = express();
app.use(express.json());

app.use("/employee" , employeeRoutes);

app.use((req ,res) => {
    res.status(404).send("server is running on 3000");
})


app.listen(3000 , () => {
    console.log("server is running on 3000");
})