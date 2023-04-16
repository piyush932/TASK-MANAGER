const express = require('express');
const App = express();
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')
require('dotenv').config();
const notfound = require('./middleware/notfound')

App.use(express.json())

App.use(express.static('./../Frontend/public'))
 
// App.use(notfound)
App.use('/api/v1/tasks',tasks)

const port = 3000;

const start = async() =>{
    try{
        await connectDb(process.env.MONGO_URI)
        App.listen(port,()=>{
            console.log(`Server started running on ${port}`)
        })
    }catch(err){
        console.log(err)
    }
}

start();
