import Feature from "../model/feature.model.js";
export const createFeature = async (req, res, next) => {
  try {
    const { featureName, featureDescription, featureStatus, projectId } =
      req.body;
    await Feature.create({
      featureName,
      featureDescription,
      featureStatus,
      projectId,
    });
    res.status(201).json({ message: "Feature created successfully" });
  } catch (err) {
    next(err);
  }
};

export const getFeatures = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const features = await Feature.find({ projectId });
    res
      .status(200)
      .json({ message: "Features fetched successfully", features });
  } catch (err) {
    next(err);
  }
};

export const updateFeature = async (req, res, next) => {
  try {
    const { featureId } = req.params;
    const { featureName, featureDescription, featureStatus } = req.body;
    await Feature.findByIdAndUpdate(
      featureId,
      {
        featureName,
        featureDescription,
        featureStatus,
      },
      { new: true },
    );
    res.status(200).json({ message: "Feature updated successfully" });
  } catch (err) {
    next(err);
  }
};
