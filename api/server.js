const express= require("express")
const app= express()
const db= require("./db")
const cors= require("cors")
const Residents= require("./models/Residents")
const cookieParser= require("cookie-parser")
const sessions= require("express-session")

const port= 3001

app.use(cors())

app.use(express.json())

app.use(cookieParser())

app.use(sessions({
    secret: "UCWeb",
    resave: true,
    saveUninitialized: true
}))

db.sync({force: false})
.then(() => {
    app.listen(port, () => console.log(`Escuchando en el puerto ${port}`))
})
