const express = require('express')
require('dotenv').config()
//import connect db method
const connectDb = require('./db/connect')

const PORT = process.env.PORT
const app = express()

app.use(express.static('./view'))

//body parser middleware con fig

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//ejs settings
app.set('view engine','ejs')
app.set('views','./view')

//home route route
app.use(`/`,require('./route/userRoute'))

//server listen
app.listen(PORT,()=>{
    connectDb()
    console.log(`server started and running @ http://localhost:${PORT}`)
})