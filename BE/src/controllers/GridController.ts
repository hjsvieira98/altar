import { Request, Response } from "express";
import { calculateCode } from "../utils/code";
import { generateGrid } from "../utils/grid";
import { validationResult } from "express-validator";

export const generateGridHandler = (req: Request, res: Response): void => {
  const { biasChar, biasPercentage } = req.body;

  const errors = validationResult(req);
  const grid = generateGrid(biasChar, biasPercentage);
  const code = calculateCode(grid);

  if (!errors.isEmpty()) {
    res.json(errors);
  } else {
    res.json({ grid, code });
  }
};
