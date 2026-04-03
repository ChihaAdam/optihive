const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const mockDay = () => {
  return random(1, 28);
};
const mockMonth = () => {
  return random(1, 12);
};
const mockYear = () => {
  return random(2026, 2030);
};
const mockDate = () => {
  return `${mockMonth()}-${mockDay()}-${mockYear()}`;
};
const mockProjectName = () => {
  const names = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
  ];
  return names[random(0, names.length - 1)];
};

const mockProjectDescription = () => {
  const descriptions = [
    "Project 1 description",
    "Project 2 description",
    "Project 3 description",
    "Project 4 description",
    "Project 5 description",
  ];
  return descriptions[random(0, descriptions.length - 1)];
};

export {
  mockProjectName,
  mockProjectDescription,
  mockDate,
  mockDay,
  mockMonth,
  mockYear,
};
