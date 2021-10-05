const mongoose = require('mongoose');
const Double = require('@mongoosejs/double');

const AccommodationSchema = new mongoose.Schema({
  //id,
   listing_url: { type: String },
   name: { type: String },
   summary: { type: String },
   description: { type: String },
   house_rules: { type: String },
   property_type: { type: String },
   room_type: { type: String },
   bed_type: { type: String },
   cancellation_policy: { type: String },
   bedrooms: { type: Number },
   beds: { type: Number },
   number_of_reviews: { type: Number },
   bathrooms:{ type: Double },
   price:  { type: Double },
   weekly_price: { type: Double},
   monthly_price: { type: Double },
   security_deposit : { type: Double},
   cleaning_fee: { type: Double },
   extra_people: { type: Double },
   guests_included: { type: Number },
   minimum_nights: { type: String },
   maximum_nights: { type: String },
   last_scraped:{type: Date, default: Date.now},
   calendar_last_scraped:{type: Date, default: Date.now},
   first_review :{type: Date, default: Date.now},
   last_review:{type: Date, default: Date.now},  

},{versionKey:false});
mongoose.model('accommodation', AccommodationSchema);

module.exports = mongoose.model('accommodation');