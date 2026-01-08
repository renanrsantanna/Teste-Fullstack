import { Router } from "express";

import { studentsRoutes } from "./studentsRoutes";

const routes = Router()

routes.use("/students", studentsRoutes)

export { routes }