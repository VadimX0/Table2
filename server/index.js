const express = require('express')
const userRouter = require('./routes//user.routes')
const postRouter = require('./routes//post.routes')
const PORT = process.env.PORT || 8080

const app = express()
var cors = require('cors');
app.use(cors());//Чтобы CORS разрешил доступ к данным при запросе
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)
app.listen(PORT, ()=> console.log(`Started on port ${PORT}`))