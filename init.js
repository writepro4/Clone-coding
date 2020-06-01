import app from "./app"

const PORT = 4000;

const handleListening = () => console.log(`✔듣고 있어요 ${PORT}`)

app.listen(PORT,handleListening)