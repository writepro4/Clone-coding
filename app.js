//import는 알파벳순으로 정렬하는것이 좋다. 방법론.
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./Routers/router";
import userRouter from "./Routers/userRouter";
import videoRouter from "./Routers/videoRouter";
import globalRouter from "./Routers/globalRouter";
import {localsMiddleware} from "./middlewares";
const app = express()

//view 엔진을 pug로 교체함.
app.set("view engine", "pug");

//보안용 미들웨어
app.use(helmet())
//cookie를 사용하기 위한 미들웨어
app.use(cookieParser())
//body에 포함된 정보를 얻기 위한 미들웨어
app.use(bodyParser.urlencoded({extended: true}))
//json 정보를 얻기 위한 미들웨어
app.use(bodyParser.json())
//로그기록용 미들웨어
app.use(morgan("dev"))
//미들웨어가 상단에 위치해야 적용됨, 유의사항 () 표시
app.use(localsMiddleware)


app.use(routes.home, globalRouter)
app.use(routes.users, userRouter)
app.use(routes.videos, videoRouter)


//내 파일을 호출할때 app object를 넘기겠다는 의미
export default app;