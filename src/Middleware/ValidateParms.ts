import express, { Request, Response,NextFunction} from 'express'
const middleware = (req: Request,res: Response, next:NextFunction) => {
    const op = req.query.op;
    const a = req.query.n1;
    const b = req.query.n2;
  
    if (op=='DIV' && b==0) {
      res.status(400).send( "erreur ");
    }
    next()
  };

  export {middleware as ValidateParms}