import rateLimit from "express-rate-limit";
import { Request, Response, NextFunction } from "express";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  handler: (req: Request, res: Response, next: NextFunction, options: any) => {
    res.status(429).json({
      success: false,
      error: `Límite alcanzado ${options.max} solicitudes cada ${options.windowMs / 1000 / 60} minutos.`
    });
  }
});

export default limiter;
