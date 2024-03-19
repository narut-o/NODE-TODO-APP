import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendJWT } from "../utils/features.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken"
import ErrorHandler from "../middlewares/error.js";
import { cookieOptions } from "../utils/cookie.js";




export const login = async (req,res,next)=>{
 
   try {
    const {email,password} = req.body;
    const user = await User.findOne({email}).select("+password");
    if(!user)return next(new ErrorHandler("Email or Password Incorrect",400))
    const isMatched = await bcrypt.compare(password,user.password);
    if(!isMatched)return next(new ErrorHandler("Email or Password Incorrect",400))
    sendJWT(user,res,`Welcome ${user.name}`);
   } catch (error) {
       next(error)
   }

   
}

export const register = async (req,res,next)=>{
   try {
    const {name,email,password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    let user = await User.findOne({email});
    if(user)return next(new ErrorHandler("User already exists",400))

  user =   await User.create({
        name,
        email,
        password:hashedPassword
    });
    sendJWT(user,res,"User created successfully");
   } catch (error) {
    next(error)
   }

}
export const getMyProfile = (req,res)=>{
   
       res.status(200).json({
        success:true,
        user:req.user
       })
}
export const logout = (req,res)=>{
          
    
    res.status(200).cookie("token",null,{...cookieOptions,expires: new Date(Date.now())}).json({
        success:true,
        user:req.user
    })
}