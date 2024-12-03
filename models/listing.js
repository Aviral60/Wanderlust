const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        require: true,
    },
    description: String,
    image:{
        type: String,
        default: "https://www.istockphoto.com/photo/the-candolim-beach-at-dusk-in-north-goa-india-gm2150163402-571351106",
        set: (v) =>
             v === "" 
        ? "https://www.istockphoto.com/photo/the-candolim-beach-at-dusk-in-north-goa-india-gm2150163402-571351106" :
         v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports= Listing;