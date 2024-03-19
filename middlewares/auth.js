import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const isAuthenticated = async (req,res,next) =>{

    const {token} = req.cookies;
    if(!token)return res.status(404).json({
        success:false,
        message:"Login First"
    })
    const decode = jwt.decode(token);
    const user = await User.findById(decode._id);
    req.user = user;
    next();
}