import { useState } from "react";
import { useTrackContext } from "./Context/ContextApi"
import Data from "./Data";

export default function Analytics(){
 const {List}= useTrackContext();
 const {options} = useTrackContext();
 const [select,setSelect]=useState();

    return(<>
 <div className="flex max-h-[50px] overflow-auto justify-center">
    <select value={select} onChange={(e)=>{setSelect(e.target.value)}}>
    {
        options.map(option=> <option>{option}</option>)
    }
    </select>
 </div>
 <div>
 <table>
 <tbody className=" overflow-hidden">
    {
       select?(
       List.filter(option=> option.category===select).map(option=>(
        <Data item={option} />
       ))
       ):(<div> </div>)
    }
    </tbody>
    </table>
 </div>
    </>)
}