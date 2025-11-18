// ratelimitMiddleware.ts

import { Request, Response, NextFunction } from "express"; 
// Importa Options para usar el tipo oficial
import rateLimit, { RateLimitRequestHandler, Options } from "express-rate-limit"; 

const limiter: RateLimitRequestHandler = rateLimit({
  windowMs: 60 * 1000, 
  max: 5,
// Usa el tipo 'Options' importado.
  handler: (req: Request, res: Response, next: NextFunction, options: Options) => {
    res.status(429).json({
      success: false,
 // options es ahora de tipo Options oficial
      error: `Limite alcanzado ${options.max} solicitudes cada ${options.windowMs / 1000 / 60} minutos.`
    })
  }
});

export default limiter;