import { User } from "../models/user";
const bcryptjs = require("bcryptjs");
export function createUser(
  username: string,
  confirmPassword: string,
  departmentId: number
) {
  return new Promise(async (resolve, reject) => {
    try {
      const hashedPassword = await bcryptjs.hash(confirmPassword, 8);
      const user = await User.findOne({
        //try to find if there is already the same username
        where: { username: username },
      });
      if (user) {
        resolve(404);
      }
      const newUser = await User.create({
        username,
        password: hashedPassword,
        departmentId,
      });
      resolve(newUser);
    } catch (error) {
      reject(error);
    }
  });
}

export function getUser(username: string, password: string) { //do the authentication
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({
        where: { username: username },
      });
      if(!user){
        resolve(400); //username not found
      }
      const isPasswordCorrect = await bcryptjs.compare(password, user.password as String)
      if(isPasswordCorrect){
        resolve(user); //user is authenticated
      }
      else{
        resolve(404); //invalid password
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function getAllUsers() {
  return new Promise(async (resolve, reject) => {
    //generally when we have async functions we use a try catch block
    try {
      const users = await User.findAll();
      resolve(users);
    } catch (error) {
      //catch here is for example when there is a connection error to database
      reject(error);
    }
  });
}
