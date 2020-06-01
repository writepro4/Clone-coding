import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//함수,변수만 가져오고 싶을때는 {변수,함수} 요런식으로 사용함.
import {userRouter} from "./router";

//예전 버전
// const express = require('express')

const app = express()

const PORT = 4000

//콜백 메소드
const handleListening = () => console.log(`${PORT}가 열렸어요`)

const handleHome = (req, res) => res.send(`hellow home`)

const Profile = (req, res) => res.send("Profile 실행")

//미들웨어 함수엔 next를 인자로 주고
//마지막 함수일 경우엔 next를 추가하지 않는다.
const middleHome = (req, res, next) => {
    console.log("some between")
    next()
}

//모든 경로 라우터에 미들웨어를 넣고 싶을 경우 app.use를 사용
//미들웨어는 중간에 로그인체크,log생성,ip주소 체크 등을 하기 위해 사용
//미들웨어 함수는 아래에 있는 라우터들에만 적용됨. 순서 유의할것
// app.use(middleHome)

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

//미들웨어는 중간에 끊을 수 있다.
//next대신 res.send 사용하게 되면 여기서 멈춘다.
const middleware = (req, res, next) => {
    res.send("not happening")
}

//앱 get 주소 url, 실행할 함수
//맨처음 주소로 들어가면 / 이 경로가 먼저 실행됨.
app.get("/", handleHome)
app.use("/user", userRouter)

//listen 라우터 생성
// app.listen(PORT, handleListening)

//내 파일을 호출할때 app object를 넘기겠다는 의미
export default app;