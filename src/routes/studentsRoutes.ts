import { Router, Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

const studentsRoutes = Router()

studentsRoutes.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.json("Requisição GET")
    } catch(error) {
        next(error)
    }
})

export { studentsRoutes }