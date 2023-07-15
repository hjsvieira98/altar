import { Request, Response } from "express";
import { calculateCode } from "../utils/code";
import { generateGrid } from "../utils/grid";

export const generateGridHandler = (req: Request, res: Response): void => {
  const { biasChar, biasPercentage } = req.body;
  const grid = generateGrid(biasChar, biasPercentage);
  const code = calculateCode(grid);
  res.json({ grid, code });
};
