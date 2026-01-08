import { ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

export function errorHandling(error: any, req: Request, res: Response, _: NextFunction) {
    if(error instanceof ZodError) {
        return res.status(400).json({ message: "Validation error", issues: error.format() })
    }

    return res.status(500).json({ message: error.message })
}