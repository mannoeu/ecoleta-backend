import express from "express";
import validate from "./config/validate";

import multer from "multer";
import multerConfig from "./config/multer";

import PointsController from "./controllers/PointsController";
const pointsController = new PointsController();

import ItemsController from "./controllers/ItemsController";
const itemsController = new ItemsController();

const routes = express.Router();
const upload = multer(multerConfig);

routes.get("/items", itemsController.index);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);
routes.post(
  "/points",
  upload.single("image"),
  validate,
  pointsController.create
);

export default routes;
