import { configDB } from "./src/db/index.js";
import { configDotenv } from "dotenv";

configDB();
configDotenv();

import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

import router from "./src/routes/routes.js";
import corsMiddleware from "./src/middlewares/corsMiddleware.js";
import errorMiddleware from "./src/middlewares/errorMiddleware.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(corsMiddleware);

app.use("/api/v1", router);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Local: http://localhost:${port}/`);
});

export default app;
