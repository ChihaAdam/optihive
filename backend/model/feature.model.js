import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({
  featureName: {
    type: String,
    required: true,
  },
  featureDescription: {
    type: String,
  },
  featureStatus: {
    type: String,
    enum: ["active", "completed", "in_review"],
    default: "active",
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
});

const Feature = mongoose.model("Feature", featureSchema);

export default Feature;
