import express, { type Request, type Response } from "express";

const app = express();

app.get("/", (_: Request, res: Response) => res.send("Express on Vercel"));

app.listen(8000, () => console.log("Server ready on port 3000."));

export default app;
