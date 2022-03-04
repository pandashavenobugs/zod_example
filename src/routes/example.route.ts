import express from "express";
import { postExampleHandler } from "../controller/example.controller";
import validate from "../middleware/sourceCheck.middleware";
import { createExampleSchema } from "../schema/example.schema";
const exampleRoutes = express.Router();

exampleRoutes.post(
  "/api/examples",
  validate(createExampleSchema),
  postExampleHandler
);

export default exampleRoutes;
