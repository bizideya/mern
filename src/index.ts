import express, { Request, Response,NextFunction} from 'express'
const app = express()

const port = 3000;




  

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})
