import express from 'express';
import { calcul } from '../Controllers/MAThController';
import { ValidateParms } from '../Middleware/ValidateParms';

export const calculRouter = express.Router()

calculRouter.use("/", ValidateParms, calcul)
