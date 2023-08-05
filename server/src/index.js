import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './Routes/userRouter.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import managerRouter from './Routes/managerRouter.js'
import deviceRouter from './Routes/deviceRouter.js'
import entryRouter from './Routes/entryRouter.js'
import teamRouter from './Routes/teamRouter.js'

const app = express()
app.use(cors({ credentials: true, origin: true }))
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())
dotenv.config()

app.use('/api/user', userRouter)
app.use('/api/manager', managerRouter)
app.use('/api/device', deviceRouter)
app.use('/api/entry', entryRouter)
app.use('/api/team', teamRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server started at http://localhost:${process.env.PORT}`)
})

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
  } catch (error) {
    console.log(error)
  }
}

connect().then(() => console.log('DB connected')).catch((error) => console.log(error))
