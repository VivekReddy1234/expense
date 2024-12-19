import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Category from './Category'
import { useTrackContext } from './Context/ContextApi'
import Table from './Table'

function App() {
  const {List, setList}= useTrackContext();
  const [name,setName]=useState("");
  const [amount,setAmount]= useState();
  const [date,setDate]= useState(Date.now());
  const [category,setCategory] = useState("select Your category");
  
  const add = ()=>{
    const n= name;
    const a= amount;
    const d= date;
    const c= category;
    if(!name || !amount || !date || !category || category=="select Your category"){
      alert("Fill the missing fields");
      return;
    }
    const ad={
      id: Date.now(),
      name :n,
      amount :a,
      category: c,
      date: d,
    }
    setName(""); setAmount(0); setCategory("Select Your Category"); setDate("");
    setList((prev)=>{
      const update= [...prev,ad];
      localStorage.setItem("List", JSON.stringify(update));
      return update;
    });
  
  }

  const [total,setTotal] = useState(0);
  useEffect(()=>{
    if(List.length>0){
    const t= List.reduce((total,item)=> total+ parseInt(item.amount),0);
    setTotal(t);}
    else setTotal(0);

    
  },[List])

  useEffect(()=>{
    const store= JSON.parse(localStorage.getItem("List"));
   setList(store || []);

  },[]);

  return (
    <>
    <div className=' flex justify-center items-center flex-col'>
      <h1 className=' text-2xl font-extrabold mt-[50px]'>Expense Tracker</h1>
      <div className='flex mt-[80px] justify-stretch'><input type="text" placeholder='Expense Name' required value={name} onChange={(e)=>{setName(e.target.value);}}></input>
      <input type="number" placeholder='Enter Amount' required value={amount} onChange={(e)=>{setAmount(e.target.value);}}></input>
      <Category setCateg={setCategory} cate={category}/>
      <input type='date' value={date}   required onChange={(e)=>{ setDate(e.target.value);}}></input>
      <button className=' bg-green-700 border border-black h-[40px] w-[150px] rounded-lg' onClick={add}>Add Expense</button>
       </div>
    </div>
    <div >
    <Table/>
      
    
     { 
      total?(<div className=' flex justify-center font-semibold text-lg text-center'> The total expenses are Rs.{total}</div>):(<div>No Expenses </div>)
      
     }
        
    </div>
    </>
  )
}

export default App
