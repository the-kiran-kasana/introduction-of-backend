const boxen = require("boxen");


console.log(boxen("I am using my first external module!" ,{ title:"Hurray!!!" , titleAlignment : "center" , borderStyle:"classic"}))


console.log(boxen("I am using my first external module!" ,{padding : 1 , title:"Hurray!!!" , backgroundColor:'blue' , titleAlignment:"center" , borderStyle:"singleDouble"}))


console.log(boxen("unicorns love rainbows" ,{ title:"Hurray!!!" , titleAlignment:"center" ,borderStyle:"round"}))

console.log(boxen("here i am used multiple options of the boxen" , {title : "multiple options" , titleAlignment:"center" ,padding : 1 ,backgroundColor:'blue' }))