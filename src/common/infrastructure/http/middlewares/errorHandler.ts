import { AppError } from "@/common/domain/errors/app-error";
import { NextFunction, Request, Response } from "express";

export function errorHandler(error: Error, request: Request, response: Response, next: NextFunction): Response {
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    });
  }

  console.log(error);

  return response.status(500).json({
    status: 'Error',
    message: 'Critical Internal Server Error'
  })
}
