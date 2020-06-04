import express from "express";

import PointsController from "./controllers/PointsController";
const pointsController = new PointsController();

import ItemsController from "./controllers/ItemsController";
const itemsController = new ItemsController();

const routes = express.Router();

/** ----------ITEMS----------- */
routes.get("/items", itemsController.index);

/** ----------POINTS----------- */
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);
routes.post("/points", pointsController.create);

export default routes;
