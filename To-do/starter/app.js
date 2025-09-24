const express =  require('express')
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require('./db/connect')
require("dotenv").config()

const port = 3000

connectDB()
//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes


app.use('/api/v1/tasks', tasks)

app.listen(port,()=>{
    console.log(`Server is running in http://localhost:${port}..`)
})