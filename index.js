//express란 파일을 express 변수안에 담는작업
const express = require('express')
const app = express()

const PORT = 4000;

//콜백 메소드
const handleListening = () => {
    console.log(`${PORT}가 열렸어요.`)
}

//앱 실행할때 할 작업
app.listen(PORT,handleListening)