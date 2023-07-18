import express from "express";
import { generateGridHandler } from "../controllers/GridController";
import { check } from "express-validator";

const router = express.Router();

router.post(
  "/",
  [
    check("biasChar", "biasChar must be a single character from a to z")
      .optional()
      .custom((biasChar) => {
        return !biasChar ||
          typeof biasChar !== "string" ||
          !/^[a-z]$/.test(biasChar)
          ? false
          : true;
      }),
    check(
      "biasPercentage",
      "BiasPercentage must be a number between 0 and 1 (inclusive)"
    ).custom((biasPercentage) => {
      return !biasPercentage ||
        typeof biasPercentage !== "number" ||
        biasPercentage < 0 ||
        biasPercentage > 1
        ? false
        : true;
    }),
  ],
  generateGridHandler
);

export default router;
