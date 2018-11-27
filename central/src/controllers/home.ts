import { Request, Response } from 'express'

export function homeController(req: Request, res: Response) {
  return res.send();
}

export function echoController(req: Request, res: Response) {
  return res.send(req.body);
}