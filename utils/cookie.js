


export const cookieOptions = {
    
    httpOnly:true,
    expires:new Date(Date.now()+60*1000),
    sameSite:process.env.NODE_ENV === "DEVELOPMENT" ? "lax" : "none",
    secure:process.env.NODE_ENV === "DEVELOPMENT" ? false : true
};