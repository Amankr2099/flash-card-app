const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const handleAPI = require('./routes/cardsAPI')
const cors = require('cors')

require('dotenv').config()

//mongodb connection
connectDB()

app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin:process.env.ORIGIN,
}))

//handle routes
app.use("/cards", handleAPI)
// app.use("/auth", authAPI)



app.listen(process.env.PORT, () => {
    console.log("Server initiated to ", process.env.PORT)
})