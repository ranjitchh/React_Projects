import express from "express";
import AuthRoute from './auth.route';
const router=express.Router();

const routes=[
    {
        "path":"/auth",
        "route":AuthRoute
    }
]

routes.forEach((c)=>{
    router.use(c.path,c.route)
})
export default router;
