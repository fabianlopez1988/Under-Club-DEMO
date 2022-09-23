const express= require("express")
const app= express()
const db= require("./db")
const cors= require("cors")
const models= require("./models/index")
const cookieParser= require("cookie-parser")
const sessions= require("express-session")
const routes = require("./routes/index")

const port= 5000

app.use(cors())

app.use(express.json())

app.use(cookieParser())


app.use(sessions({
    secret: "UCWeb",
    resave: true,
    saveUninitialized: true
}))

app.use("/api", routes)

db.sync({force:false})
.then(() => {
    app.listen(port, () => console.log(`Escuchando en el puerto ${port}`))
})
