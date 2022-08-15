const express =require('express')
const bodyParser= require("body-parser")
const app = express();
app.use(bodyParser.json());
const dotenv =require("dotenv")

const connectDb =require("./db")


//load config

dotenv.config({path:"./config/config.env"});
// app.get("/",(req,res)=>{
//     res.send("hellow")
// })
//  app.post("/employee",(req,res)=>{

//       const user = req.body.user;

//  })
connectDb();

//routes
app.use('/',require("./routes/index"));

app.listen(3000, ()=>{

    console.log("your server is runnig on port 3000")
})
