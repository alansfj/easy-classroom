import { Request, Response } from "express";

export class AuthController {
  constructor() {}

  login = (req: Request, res: Response) => {
    res.json("login test");
  };

  register = (req: Request, res: Response) => {
    res.json("register test");
  };
}
