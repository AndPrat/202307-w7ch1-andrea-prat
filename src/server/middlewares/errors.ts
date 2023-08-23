import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../CustomError/CustomError.js";

export const endpointNotFound = (
  error: CustomError,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errorEnpointNotFound = new CustomError("Endpoint not found", 404);

  next(errorEnpointNotFound);
};

export const generalErrorHandler = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const errorMessage = error.message ?? "What happens?";
  const errorStatusCode = error.statusCode ?? 500;

  res.status(errorStatusCode).json({ error: errorMessage });
};
