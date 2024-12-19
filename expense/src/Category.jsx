import { useEffect, useState } from "react"
import { useTrackContext } from "./Context/ContextApi";

export default function Category({setCateg,cate}){
   const [category,setCategory] = useState(cate);
   const {options,setOptions}= useTrackContext();
 
   const [cat,setCat]=useState();
  const add = ()=>{
   const b= cat;
   if(!b){alert("fill the missing fields"); return}
   const a = [...options,b];
   setCat("");
   setOptions(a);
   localStorage.setItem("options",JSON.stringify(a));
  }
  useEffect(()=>{
   const store= JSON.parse(localStorage.getItem("options"));
   if(store) setOptions(store);
  },[]);
    return(< >
    <div className="flex gap-x-9">
    
     <select value={category} onChange={(e)=>{
        setCategory(e.target.value);
        setCateg(e.target.value);
     }}>
        { options.map(item=>(
          <option>{item}</option>
        ))

        }
     </select>
<br></br>    <input type="text" placeholder="Enter custom category" className="border font-semibold" value={cat} onChange={(e)=>{setCat(e.target.value)}}></input>
        <button onClick={add} className="border mr-6">Add</button>
        </div>
    </>)
}