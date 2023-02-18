import express, { Request, Response,NextFunction} from 'express'
const app = express()
import {ValidateParms} from '../Middleware/ValidateParms';
import{Handler }from '../Services/MathService';

app.use("/calc",ValidateParms,Handler);

