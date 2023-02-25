import express, { Request, Response,NextFunction} from 'express'
// export const Handler = ( req: Request, response: Response,next: NextFunction) => {
//     const operation = req.query.op;
//     const a = req.query.n1;
//     const b = req.query.n2;
//     switch (operation) {
//         case 'ADD' :
//             const sum =Number(a) +Number(b)
//       response.status(200).send(`la somme de ${a} + ${b} egale :${sum} `)
//             break;

//         case 'MULT':
//             const sum2 =Number(a) *  Number(b)
//             response.status(200).send(`la multiplication  de ${a} * ${b} egale :${sum2} `)
//             break;

//          case 'DIV' :
//          const sum3=Number(a) +Number(b)
//       response.status(200).send(`la division de ${a} / ${b} egale :${sum3} `)
//             break;
//             case 'MIN' :
//                 const sum4=Number(a) +Number(b)
//              response.status(200).send(`la division de ${a} - ${b} egale :${sum4} `)
//                    break;
//             default:
//                 response.status(400).send(`mauvaise choix :l'operation doit etre DIV, MIN,MULT,ADD`)

//     } 

  
//   };

export const calculate = (number1: number, number2: number, operation: string) => {
    switch(operation){
        case 'IDV':
            return number1 / number2;
            case 'ADD':
                return number1 + number2
                case 'MINUS' :
                    return number1 - number2
                    case 'MULT':
                        return number1 * number2
    }
}
 