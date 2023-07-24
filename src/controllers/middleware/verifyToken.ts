import { NextFunction, Request, Response } from "express"
const jwt = require('jsonwebtoken')
const dotenv  = require("dotenv")
dotenv.config();
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers['authorization']
    if(bearerHeader){ //if it exists means i have logged in
        const token = bearerHeader.split(" ")[1]; //get the token
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, data: any) => {
            if(err){
                return res.status(403).send({errorMessage: "Authorization failed"})
            }else{
                req.body = data;
                next();
            }
        })
    }
    else{ //doesn't exist means have not logged in yet
        console.log(bearerHeader)
        res.status(403).send({errorMessage: "Please login first"})
    }
}

export const verifyTokenNoReq = (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers['authorization']
    if(bearerHeader){ //if it exists means i have logged in
        const token = bearerHeader.split(" ")[1]; //get the token
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, data: any) => {
            if(err){
                return res.status(403).send({errorMessage: "Authorization failed"})
            }else{
                next();
            }
        })
    }
    else{ //doesn't exist means have not logged in yet
        console.log(bearerHeader)
        res.status(403).send({errorMessage: "Please login first"})
    }
}