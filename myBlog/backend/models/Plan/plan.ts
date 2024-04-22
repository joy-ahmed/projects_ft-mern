import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
  {
    planName: {
      type: String,
      required: true,
    },
    features: [String],
    price: {
      type: Number,
      required: true,
    },
    limitations: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Plan", planSchema);
