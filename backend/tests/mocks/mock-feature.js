export const mockFeatureName = () => {
  const validNames = [
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4",
    "Feature 5",
  ];

  return validNames[Math.floor(Math.random() * validNames.length)];
};
export const mockFeatureDescription = () => {
  const descriptions = [
    "Feature 1 description",
    "Feature 2 description",
    "Feature 3 description",
    "Feature 4 description",
    "Feature 5 description",
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};
