import express, { Request, Response,NextFunction} from 'express'
const middleware = (req: Request,res: Response, next:NextFunction) => {
    const op = req.query.op;
    const a = req.query.n1;
    const b = req.query.n2;
  
    if (a === undefined || b === undefined || op === undefined) {
      res.status(400).send( "erreur ");
    }
    next()
  };

  export {middleware as ValidateParms}