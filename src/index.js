const express = require('express')
require('./db/mongoose')
require('dotenv').config()
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT;

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.get('', async (req, res) => {
    res.send('<h1>Welcome to task-manager-api</h1>')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')