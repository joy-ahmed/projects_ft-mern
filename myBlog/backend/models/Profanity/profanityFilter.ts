import mongoose from "mongoose";

const profanityFilterSchema = new mongoose.Schema(
  {
    word: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("ProfanityFilter", profanityFilterSchema);
