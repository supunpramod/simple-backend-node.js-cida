import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';



const app=express();

const mongourl="mongodb+srv://supun:supun1234@cluster0.1nxwndw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongourl,{});
const connection=mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB connection established");
})
connection.once('error', (err) => {
    console.log("MongoDB connection failed");
})

app.use(bodyParser.json());


app.get('/',
    (req,res)=>{
    console.log("Hello from the server")

    console.log(req.body)
    
    res.send("welcome");


});



app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});
