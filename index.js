const express = require("express")
const dotenv = require("dotenv")
const connection = require("./config/db")
const UserRouter = require("./routes/user.routes")
var cookieParser = require('cookie-parser')
const notesRouter = require("./routes/notes.routes")
dotenv.config()
const cors = require("cors")

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin:  [
    "https://fullstack-frontend-q1ws.vercel.app",
    "https://fullstack-frontend-3cpsl0m6c-divyeshs-projects-8f8a4893.vercel.app"
],
    credentials: true
}))

app.use(express.static("./uploads"))
app.use("/user", UserRouter)
app.use("/notes", notesRouter)


app.listen(process.env.PORT || 3000, async () => {

    try {
        await connection
        console.log("connected to database")

        console.log(`server is running on port ${process.env.PORT || 3000}`)
    } catch (error) {
        console.log(error)
    }
})
