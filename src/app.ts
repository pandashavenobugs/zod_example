import express, { Express, Request, Response } from "express";
import cors from "cors";
import exampleRoutes from "./routes/example.route";

const port = 3000;
const host = "127.0.0.1";

const app: Express = express();
app.get("/api/test", (req: Request, res: Response) => {
  res.status(200).json("okey");
});
app.use(cors());
app.use(express.json());
app.use(exampleRoutes);

app.listen(port, host, () => {
  console.log("i am listening ");
});
