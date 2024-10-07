import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: { 
    type: String, 
    required: true 
  },
  rating: { 
    type: Number, 
    required: true 
  },
  comment: { 
    type: String, 
    required: true 
  },
}, {
  timestamps: true,
});

const perfumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  size: [
    {
      name: { type: String, required: true },
      total: { type: Number, required: true, default: 0 },
    },
  ],
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  size: [
    {
      name: { type: String, required: true },
      total: { type: Number, required: true, default: 0 },
    },
  ],
}, {
  timestamps: true,
});

const Perfume = mongoose.model("Perfume", perfumeSchema);

export default Perfume;