const express= require("express")
const app= express()
const db= require("./db")
const cors= require("cors")
const Residents= require("./models/Residents")
const cookieParser= require("cookie-parser")
const sessions= require("express-session")
const routes = require("./routes/index")
const path = require('path');

const port= 5000

app.use(cors())

app.use(express.json())

app.use(cookieParser())


app.use(sessions({
    secret: "UCWeb",
    resave: true,
    saveUninitialized: true
}))

// función middleware para servir archivos estáticos
// app.use(express.static(path.join(__dirname, 'public')));


app.use("/api", routes)

db.sync({force:false})
.then(() => {
    app.listen(port, () => console.log(`Escuchando en el puerto ${port}`))
})
