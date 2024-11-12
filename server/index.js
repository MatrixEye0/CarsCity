import bodyParser from "body-parser";
import { router } from "./routes/route.js";
import cors from "cors";
import express from "express";

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(router)
app.listen(5173, () => {
  console.log("server is running on port 5173!");
});
