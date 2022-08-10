import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import User from './src/routes/user'
import './src/config'
dotenv.config({path: `./${process.env.NODE_ENV}.env`})
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/users', User)
app.listen(process.env)