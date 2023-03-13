import { Request, Response } from 'express'
import { calculate } from '../Services/MathService'


export const calcul = (req: Request, res: Response) =>{
    try {
        const { number1,  number2, operation } = req.qury;
        return res.status(200).send(calculate(number1, number2, operation))
    } catch (error) {
        
    }
}

