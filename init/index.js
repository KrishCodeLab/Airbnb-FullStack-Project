const mongoose=require("mongoose");
const { data: sampleListings } = require("./data.js");
const Listing = require("../Models/listing.js");

const Mongo_URL="mongodb://127.0.0.1:27017/airbnb";



async function main(){
  await mongoose.connect(Mongo_URL);
  console.log("Connected to DB for seeding ")
}

main()
.then(async ()=>{
  await Listing.deleteMany({})
  await Listing.insertMany(sampleListings)
  console.log(" Data was initialized... ")
  await mongoose.connection.close();
})
.catch((err) => {
    console.log("Error--->", err);
  });