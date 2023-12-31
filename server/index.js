import { configDotenv } from "dotenv";

configDotenv();

import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

import router from "./src/routes/routes.js";
import errorMiddleware from "./src/middlewares/errorMiddleware.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: [
      "http://localhost:4173",
      "http://localhost:5173",
      process.env.CLIENT_URL,
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Local: http://localhost:${port}/`);
});

export default app;
