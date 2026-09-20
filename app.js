const express=require("express");
const app=express()
const mongoose=require("mongoose");
const path=require("path");
const Listing = require("./Models/listing.js");
const port=8080;
const methodOverride=require("method-override")

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));

app.use(methodOverride("_method"));

// MongoDB connection string: mongodb://<host>:<port>/<databaseName>
const Mongo_URL="mongodb://127.0.0.1:27017/airbnb";

// ================= DATABASE CONNECTION =================
// main() returns a Promise (because it's async), so we can chain .then()/.catch()
// to know whether the DB connection succeeded or failed.

main()
.then(()=>{
  console.log("Connected to DB")
})
.catch((err)=>{
  console.log("Error --->",err)
})

// Async function to connect with mongodb database
async function main(){
  await mongoose.connect(Mongo_URL); //"await" pauses here until connection is established
}


// Simple Test Route :-
app.get("/start",(req,res)=>{
  // req = incoming request (headers, params, body)
  // res = response object, used to send data back to client
  res.send("Jay Shree Ganesha !!! ")
})

// Display all list data
app.get("/listing",async(req,res)=>{
  const allListings = await Listing.find({});
  res.render("listings/index.ejs",{allListings})
})

//Create a new 
app.get("/listing/new",(req,res)=>{
  res.render("listings/new.ejs")
})

// Post new list
app.post("/listing",async(req,res)=>{
  let {title,description,price,country,location}=req.body;
  const newListing=new Listing({
    title,
    description,
    price,
    country,
    location

});
    await newListing.save();
    res.redirect("/listing")
5
    // res.send("New listing added successfully!");
})


// Edit form Route :
app.get("/listing/:id/edit",async (req,res)=>{
  let {id}=req.params;
  let particularData=await Listing.findById(id);
  res.render("listings/edit",{particularData});
})


// Updata Data in Database PUT Request for updating data :- 
app.put("/listing/:id",async(req,res)=>{
  const newListing=req.body.Listing;
  let {id}=req.params;
  
  const UpdatedListing=await Listing.findByIdAndUpdate(id,newListing)
  UpdatedListing.save();

  res.redirect("/listing")
})



// Shwo Route:
app.get("/listing/:id",async(req,res)=>{
  const {id}=req.params;
  const particularData=await Listing.findById(id);
  res.render("listings/show.ejs",{particularData})
})

// ------------------------------------------------------------
// TEST ROUTE - ONLY needed once, to confirm mongoose.connect() +
// Listing.save() actually work. Now that real data is seeded via
// init/index.js, this route just creates duplicate junk documents
// every time it's hit -> commented out, no longer needed.
// ------------------------------------------------------------

// app.get("/testlistening",async(req,res)=>{
//   let sampleListening=new Listing({
//     title:"My new villa",
//     description:"By the beach",
//     price:9999,
//     location:"Nashik",
//     country:"India"
//   });

//   await sampleListening.save();
//   console.log("Sample Was Saved ")
//   res.send("Successfully Testing")
// })



// Server Listening message printing
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
})