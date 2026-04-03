import Feature from "../model/feature.model.js";

export const validateInput = (req, res, next) => {
  const { featureName, featureDescription, featureStatus, projectId } =
    req.body;
  //featureName is the only required field
  if (!featureName) {
    const err = new Error("Feature name is required");
    err.statusCode = 400;
    throw err;
  }
  const featureStatusEnum = ["active", "completed", "in_review"];
  if (!featureStatusEnum.includes(featureStatus)) {
    const err = new Error("Invalid feature status");
    err.statusCode = 400;
    throw err;
  }
  const feature = {
    featureName: featureName?.toString()?.trim(),
    featureDescription: featureDescription?.toString()?.trim(),
    featureStatus: featureStatus?.toString()?.trim(),
    projectId: projectId?.toString()?.trim(),
  };

  req.body = feature;
  next();
};
