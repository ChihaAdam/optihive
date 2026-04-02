export const validateProjectMiddleware = (req, res, next) => {
  try {
    const projectDetails = {
      projectName: req?.body?.projectName?.toString()?.trim(),
      projectDescription:
        req?.body?.projectDescription?.toString()?.trim() || "",
      deadline: req?.body?.deadline?.toString()?.trim(),
    };
    if (!projectDetails.projectName || !projectDetails.deadline) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      throw error;
    }
    const deadlineDate = new Date(projectDetails.deadline);
    if (deadlineDate < Date.now()) {
      const error = new Error("Deadline must be in the future");
      error.statusCode = 400;
      throw error;
    }
    req.projectDetails = projectDetails;
    next();
  } catch (error) {
    next(error);
  }
};
