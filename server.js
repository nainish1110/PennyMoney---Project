const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const colors=require('colors')
const dotenv=require('dotenv')
const connectDB = require('./config/connectDB')
//config dot env file
dotenv.config();


connectDB()



const app=express(); //object instantiation

//middleware

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('<h1>Lord Shardul Thakur</h1>');
})

const PORT=8080 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

