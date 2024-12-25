import { useState } from "react";
import { useTrackContext } from "./Context/ContextApi"
import { useEffect } from "react";

export default function Data({item,index}){
    const {List,setList} = useTrackContext();
    const [Edit,setEdit]= useState(false);
    const [name,setName]= useState(item.name);
    const [amount,setAmount]= useState(item.amount);
    const[ category,setCategory] =useState(item.category);
    const [date,setDate]= useState(item.date);
    const n= List.length-1;
    

    useEffect(() => {
      setName(item.name);
      setAmount(item.amount);
      setCategory(item.category);
      setDate(item.date);
    }, [item]);

    const handleSave= ()=>{
     
      const a=List.map(l=>(l.id==item.id?{...l,name,date,category,amount}:l))
      setList(a);
      localStorage.setItem("List",JSON.stringify(a));
      setEdit((prev)=> !prev);
    }
    const handledelete=()=>{
        const update= List.filter(l=> l.id!==item.id)
        setList(update);
        localStorage.setItem("List",JSON.stringify(update));
    }
    return(
        <>
             <tr className=" ml-[100px]">
            <td className="h-[20px] w-[100px] border text-center">{index+1}</td>
            <td className="h-[20px] w-[200px] border text-center"><input type="text" value={name} onChange={(e)=>{setName(e.target.value);}} readOnly={!Edit}/> </td>
            <td  className="h-[20px] max-w-[150px] border text-center"><div className="w-[150px]"><input className='w-[100px]' type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}}
              readOnly={!Edit}/> </div></td> 
            <td className="h-[20px] w-[200px] border text-center">
            <input type="text" value={category} onChange={(e)=> {setCategory(e.target.value)}} readOnly={!Edit} /></td>
            <td className="h-[20px] w-[200px] border text-center">  <input type="text" value={date} onChange={(e)=> {setDate(e.target.value)}} readOnly={!Edit} /></td> 
            <td className="h-[20px] w-[230px] border text-center">
              <div className="h-[60px] max-w-[230px] text-center">
              { Edit?(
                <button className=" h-[50px] w-[60px] font-extrabold  border bg-green-600" onClick={handleSave}>
                    Save
                </button>
              ):(
                <button className=" h-[50px] w-[60px] font-extrabold  border bg-gray-500" onClick={()=>{
                    setEdit((prev)=>!prev);
                }}>Edit</button>)
                 }
                <button className=" h-[50px] w-[60px] font-extrabold border bg-gray-500" onClick={handledelete}>Delete</button>
              </div>
            </td></tr>
        </>
    )
}