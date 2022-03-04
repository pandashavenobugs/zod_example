import { NextFunction, Request, Response } from "express";

export function CreateExample(req: Request, res: Response, next: NextFunction) {
  // const example: Example = req.body.example;
  return postExamplePromise(req);
}

const postExamplePromise = (req: Request): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // const { name, amount }: { name: string; amount: number } = req.body;
      const id = "12345";
      resolve(id);
    }, 500);
  });
};
