const express = require('express')
const cors = require("cors");

const mongoose = require('mongoose')
const User = require("./Models/User")
const mongo_url="mongodb+srv://bhavdeep:BhavdeepCU@bhavdeepcluster.ybto6.mongodb.net/?retryWrites=true&w=majority&appName=bhavdeepcluster"

const UserRoute= require('./Routes/User')
const HazardRoute= require('./Routes/Hazard')
const NotificationRoute= require('./Routes/Notification')
const app = express()
app.use(express.json())
app.use(cors({
    origin:"*",
    credentials: true,
}));
mongoose.connect(mongo_url ,{useNewUrlParser:true})

const con = mongoose.connection
con.on('open',()=>{
    console.log("connected.....")
})

app.get('/testing', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running'
    });
});


app.use('/user',UserRoute)
app.use('/notification',NotificationRoute)
app.use('/hazard',HazardRoute)


app.listen(5000,()=>{
    console.log("Server Started....")
})