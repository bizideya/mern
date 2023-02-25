import express, { Request, Response,NextFunction} from 'express'
import { calculRouter } from './routes/calcul.router';
const app = express()

const port = 3000;

app.use("/calcul", calculRouter)
  

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})
