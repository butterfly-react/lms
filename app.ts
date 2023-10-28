import express, { NextFunction, Request, Response } from 'express'
export const app = express()
import cors from 'cors'
import cookieParser from 'cookie-parser'
require('dotenv').config()

// "start" : "ts-node-dev --respawn --transpile-only server.ts"

const ORIGIN = process.env.ORIGIN || 'http://localhost:3000'
app.use(express.json({limit: '50mb'}))

app.use(cors({

    origin: [ ORIGIN ]

}))

app.get('/test', (req: Request, res: Response, next: NextFunction) => {

    return res.status(200).json({
        success: true,
        message: 'API is working'
    })

})