import express,{Express,Request,Response} from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app :Express = express()
const port = process.env.APP_PORT

app.get('/check',(req:Request,res:Response) => {
    return res.json("halo")
})

app.listen(port,() => {
    console.log(`server running on ${port} `)
})
