const express= require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const cors= require('cors');
const userRouter= require("./routes/user.js");
const checkForAuth= require("./middlewares/auth.js");
const cookieParser= require("cookie-parser");
const expenseRouter= require("./routes/expense.js");
const Expense = require("./models/expense.js");



app.use(cookieParser());
mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("Database connected")}).catch((err)=>{console.log("error",err)});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:9000', 'https://expense-eight-sepia.vercel.app'],
  credentials: true
}));

app.use(checkForAuth);



app.use('/user',userRouter);
app.use('/expense',expenseRouter);
app.get('/', async(req,res)=>{
    const user= req.user;
    var expenses=null;
   if(user){ expenses = await Expense.find({createdBy:user._id});}
 
    return res.json({user:user, expenses:expenses?expenses:null});
})










app.listen(9000,()=>{
    console.log("Server Started Successfully");
})
