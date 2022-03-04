import { NextFunction, Request, Response } from "express";
import { CreateExample } from "../service/example.service";

export async function postExampleHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = await CreateExample(req, res, next);
    res.status(200).json({
      message: "example added succesfully",
      id,
    });
  } catch (e: any) {
    res.status(400).send(e.message);
  }
}
