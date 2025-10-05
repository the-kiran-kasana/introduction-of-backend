const express = require("express")
const bookRoutes = require("./routes/bookRoutes")
const app = express();
app.use(express.json());

app.use("/books" , bookRoutes);

app.use((req ,res) => {
    res.status(404).send("server is running on 3000");
})


app.listen(3000 , () => {
    console.log("server is running on 3000");
})