import { useEffect, useState } from "react";
import { Provider } from "./Context/ContextApi";
import App from "./App";
import {NavLink, Outlet} from "react-router-dom";

export default function Index(){
  
    const [List,setList]=useState([]);
    const [options,setOption] = useState(["Select Category ","food","Transport"]);
    const setOptions=(a)=>{
        setOption(a);
      }
    

    return(
        <Provider value={{List,setList,options,setOptions}}>
        <div className="h-[20x] flex flex-col items-center font-semibold">

       <div className="flex justify-center"> <h1 className=' text-2xl font-extrabold mt-[10px]'>Expense Tracker</h1></div>

           <div className="flex justify-around gap-[30px]">
                  <NavLink to="/" className="border ">Home</NavLink>
                  <NavLink to="/analytics">Analytics</NavLink>
            </div>

        </div>
            <Outlet/>
        </Provider>
    )
}