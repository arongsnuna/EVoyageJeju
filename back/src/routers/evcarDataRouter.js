import is from "@sindresorhus/is";
import { Router } from "express";

import { login_required } from "../middlewares/login_required.js";
import { evcarDataService } from "../services/evcarDataService.js";
import jwt from "jsonwebtoken";

const evcarDataRouter = Router();

evcarDataRouter.get("/co2Emission", async function (req, res, next) {
  try {
    const data = await evcarDataService.findJejuEvCar();
    if (data.errorMessage) {
      throw new Error(data.errorMessage);
    }
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

evcarDataRouter.get("/population", async function (req, res, next) {
  try {
    const data = await evcarDataService.findPopulation();
    if (data.errorMessage) {
      throw new Error(data.errorMessage);
    }
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

evcarDataRouter.get("/evRatio/:year", async function (req, res, next) {
  try {
    const data = await evcarDataService.findEvRatioByYear(req.params.year);
    if (data.errorMessage) {
      throw new Error(data.errorMessage);
    }
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

export { evcarDataRouter };
