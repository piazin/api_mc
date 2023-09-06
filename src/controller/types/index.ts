import { Request, Response } from 'express';

export type IResponseExpress = (req: Request, res: Response) => Promise<void>;
