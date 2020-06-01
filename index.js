import express from "express";

//예전 버전
// const express = require('express')

const app = express()

const PORT = 4000

//콜백 메소드
const handleListening = () => console.log(`${PORT}가 열렸어요.`)


const handleHome = (req, res) => {
    console.log("hi home")
    console.log(req)
    res.send(`hellow home`)
}

const Profile = (req, res) => res.send("Profile 실행")


//앱 get 주소 url, 실행할 함수
app.get("/", handleHome)

app.get("/profile", Profile)

//listen 라우터 생성
app.listen(PORT, handleListening)