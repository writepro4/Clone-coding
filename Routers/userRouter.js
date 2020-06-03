import express from "express"
import routes from "./router";
import {
    userDetail,
    editProfile,
    changePassword
} from "../controller/userController";


const userRouter = express.Router();

//인식하는 순서에 따라 처리가 다르니 유의
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;