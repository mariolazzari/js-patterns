import express from "express";
import calc from "./calc";

const aNumber = calc();
const app = express();
const PORT = 3000;

app.get("/", (_req, res) =>
  res.send(`Showing number ${aNumber} on port ${PORT}`)
);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
