import { User } from "../models/user.js";


 export const getAllUsers = async(req,res)=>{
  
    const users = await User.find();
    res.json({
        success:true,
        users
    })
}

export const getUserById = async(req,res)=>{

   
    const {id} = req.params;
    const user =  await User.findById(id);
    res.json({
        success:true,
        user
    })
    
   
}
export const updateUserById = async(req,res)=>{

   
    const {id} = req.params;
    const user =  await User.findById(id);
    res.json({
        success:true,
        message:"updated"
    })
    
   
}
export const deleteUserById = async(req,res)=>{

    const {id} = req.params;
    const user =  await User.findById(id);
    res.json({
        success:true,
        message:"deleted"
    })
    
   
}

export const createUser  = async(req,res)=>{
  
    const {name,password,email} = req.body;
    await User.create({
        name,
        email,
        password
    })
    res.status(201).json({
        success:true,
        message:"user created successfully"
    })
}