const express = require("express");
const fs = require("fs")
const app = express();
app.use(express.json());






app.get("/dishes" , async (req ,res) => {
     const dishes = await JSON.parse(fs.readFileSync("./db.json" , "utf-8"));
     if(!dishes){
        res.status(404).json({error : "data not found"});
     }else{
        res.status(200).json({dishes : dishes.DishesData});
     }
})




app.get("/dishes/:id" , async (req ,res) => {
    const dishId = req.params.id;
    const dishes = await JSON.parse(fs.readFileSync("./db.json" , "utf-8"));
    const dish = dishes.DishesData

        dish.forEach((el ,id) => {
           if(el.id == dishId){
             res.status(200).json({dishes : el});
           }
        })
})





app.post("/addDishes" , async  (req ,res) => {
     let newDish = req.body;
     const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
     let dishList = data.DishesData;

     console.log(newDish);

     const newId = dishList[dishList.length - 1].id + 1;

     newDish = { id: newId, ...newDish };
     dishList.push(newDish);
     fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
})





app.put("/dishes/:id" , (req ,res) => {
    let newDish = req.body;
    const dishID = req.params.id;
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let dishList = data.DishesData;

     let updateDish = dishList.map((el , id) => {
        if(el.id == id){
           return {...el , ...updateCourse}
        }else{
            return el;
        }
    })
    dishList = updateDish;
    fs.writeFileSync("./db.json", JSON.stringify(dishList));
     res.status(201).json({msg : "deleted course"})

})


app.delete("/dishes/:id" , (req ,res) => {

})






app.use((req ,res) => {
   res.send("404 not found")
})







app.listen(4000 , (req ,res) => {
   console.log("server run on 4000");
})