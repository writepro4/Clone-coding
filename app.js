import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//함수,변수만 가져오고 싶을때는 {변수,함수} 요런식으로 사용함.
// import {userRouter} from "./Routers/userRouter";

import userRouter from "./Routers/userRouter";
import videoRouter from "./Routers/videoRouter";
import globalRouter from "./Routers/globalRouter";
import routes from "./Routers/router";


const app = express()

const PORT = 4000


//cookie를 사용하기 위한 미들웨어
app.use(cookieParser())
//body에 포함된 정보를 얻기 위한 미들웨어
app.use(bodyParser.urlencoded({extended: true}))
//json 정보를 얻기 위한 미들웨어
app.use(bodyParser.json())
//보안용 미들웨어
app.use(helmet())
//로그기록용 미들웨어
app.use(morgan("tiny"))



app.use(routes.home, globalRouter)
app.use(routes.users, userRouter)
app.use(routes.videos, videoRouter)


//내 파일을 호출할때 app object를 넘기겠다는 의미
export default app;