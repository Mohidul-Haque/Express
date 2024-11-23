// const express = require("express");
// const path = require("path");
// const app = express();
// const port = 80;

// // for serving static files
// app.use("/static", express.static("static"));

// //set the template engine as pug
// app.set("view engine", "pug");

// // set the view directory
// app.set("views", path.join(__dirname, "views"));

// // our pug demo endpoint
// app.get("/demo", (req, res) => {
//   res.status(200).render("demo", {
//     title: "Hey Mohidul",
//     message: "Hello there! this is Pub-G!!!",
//   });
// });

// app.get("/", (req, res) => {
//   res.send("This is home of my first express app");
// });

// app.get("/about", (req, res) => {
//   res.send("This is about page");
// });

// // with status code
// app.get("/this", (req, res) => {
//   res.status(203).send("This is /this with 404 page ");
// });

// app.post("/about", (req, res) => {
//   res.send("This is about page with post requies!!!!!!....");
// });

// app.listen(port, () => {
//   console.log(`The application stated successfully on port${port}`);
// });
//====================================================================================================================================

// #73
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

//EXPRESS RELATED Stuff
app.use("/static", express.static("static")); // for serving static files
app.use(express.urlencoded());

// pug Related stuff
app.set("view engine", "pug"); //set the template engine as pug
app.set("views", path.join(__dirname, "views")); // set the view directory

// end points
app.get('/', (req, res) => {

  const con = "This is best contatin in the web ever!...."
  const pmeter = {'title': ' You play free fire' , 'cont': con }

  res.status(200).render("index.pug", pmeter);
});

app.post('/',(req, res)=>{
  

  namee = req.body.namee
  age = req.body.age
  gender = req.body.gender
  address = req.body.address
  more = req.body.more

  let outputTowrite = `Name: ${namee} age: ${age} Gender: ${gender}, Address: ${address} more about him/her is ${more}`
  fs.writeFileSync('Responce.txt',outputTowrite)
console.log(req.body);  //output in terminal
  const pmeter = {'message': "Your form has been submited successfuly!"}
  res.status(200).render('index.pug',pmeter);
})

//Start the Server
app.listen(port, () => {
  console.log(`The application stated successfully on port ${port}`);
});
