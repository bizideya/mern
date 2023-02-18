import express, { Request, Response,NextFunction} from 'express'
const app = express()

const port = 3000;


const middleware = (req: Request,res: Response, next:NextFunction) => {
    const op = req.query.op;
    const a = req.query.n1;
    const b = req.query.n2;
  
    if (op=='DIV' && b==0) {
      res.status(400).send( "erreur ");
    }
    next()
  };



  const Handler = ( req: Request, response: Response,next: NextFunction) => {
    const operation = req.query.op;
    const a = req.query.n1;
    const b = req.query.n2;
    switch (operation) {
        case 'ADD' :
            const sum =Number(a) +Number(b)
      response.status(200).send(`la somme de ${a} + ${b} egale :${sum} `)
            break;

        case 'MULT':
            const sum2 =Number(a) *  Number(b)
            response.status(200).send(`la multiplication  de ${a} * ${b} egale :${sum2} `)
            break;

         case 'DIV' :
         const sum3=Number(a) +Number(b)
      response.status(200).send(`la division de ${a} / ${b} egale :${sum3} `)
            break;
            case 'MIN' :
                const sum4=Number(a) +Number(b)
             response.status(200).send(`la division de ${a} - ${b} egale :${sum4} `)
                   break;
            default:
                response.status(400).send(`mauvaise choix :l'operation doit etre DIV, MIN,MULT,ADD`)

    } 

  
  };
 
 
app.use("/calc",middleware,Handler);
  


app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})
