import { NextFunction, Request, Response } from "express";
import { createUser, getAllUsers, getUser } from "../services/user.services";
import { User } from "../models/user";
const jwt = require('jsonwebtoken');
const dotenv  = require("dotenv")
dotenv.config();
export async function postUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(
      req.body.username,
      req.body.confirmPassword,
      req.body.departmentId
    ); //create the user object
    if (typeof user === "number" && user === 404) {
      return res
        .status(404)
        .send({
          errorMessage:
            "Username already exists. Please enter a different username",
        });
    } else {
      res.send(user);
    }
  } catch (e) {
    res.status(500).send({ errorMessage: "server error" });
  }
}

export async function getUserHandler(req: Request, res: Response) {
  try {
    const user = await getUser(req.body.username, req.body.password);
    if(user instanceof User){ //if user is authenticated, generate a token
      const token = jwt.sign({username: user.username, department: user.departmentId}, process.env.ACCESS_TOKEN_SECRET)
      // res.cookie('token', token, {httpOnly:false})
      res.send(token)
    } 
    else if(typeof user === 'number' && user===400){
      res.status(400).send({ errorMessage: "Invalid username" });
    }
    else if(typeof user === 'number' && user===404){
      res.status(404).send({ errorMessage: "Invalid password" });
    }
  } catch (e) {
    return res.status(500).send({ errorMessage: "server error" });
  }
}


export async function getAllUsersHandler(req: Request, res: Response) {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (e) {
    res.status(500).send({ errorMessage: "server error" });
  }
}
