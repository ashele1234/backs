import { Request, Response, Router } from "express";

const router = Router()
router.get("/", (req:Request, res:Response)=>{
    try {
        res.status(200).json({
            message: "Welcome to DB"
        })
    } catch (error:any) {
        res.status(400).json({
            message: "Error Occured",
            error: error.message
        })
    }
})

export default router