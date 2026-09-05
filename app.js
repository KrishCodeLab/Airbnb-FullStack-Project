const express=require("express");
const app=express()
const mongoose=require("mongoose");
const path=require("path");
const Listing = require("./Models/listing.js");
const port=8080;

const Mongo_URL="mongodb://127.0.0.1:27017/airbnb";




main()
.then(()=>{
  console.log("Connected to DB")
})
.catch((err)=>{
  console.log("Error --->",err)
})

// Async function to connect with mongodb database
async function main(){
  await mongoose.connect(Mongo_URL);
}



app.get("/start",(req,res)=>{
  res.send("Jay Shree Ganesha !!! ")
})


app.get("/testlistening",async(req,res)=>{
  let sampleListening=new Listing({
    title:"My new villa",
    description:"By the beach",
    price:9999,
    location:"Nashik",
    country:"India"
  });

  await sampleListening.save();
  console.log("Sample Was Saved ")
  res.send("Successfully Testing")
})



// Server Listening message printing
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
})