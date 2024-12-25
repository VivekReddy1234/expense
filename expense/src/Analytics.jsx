import { useEffect, useState } from "react";
import { useTrackContext } from "./Context/ContextApi"
import Data from "./Data";
import Table from "./Table";
import { useLocation } from "react-router-dom";

export default function Analytics(){
   
   const location= useLocation();
   
 const {List}= useTrackContext();
 const [options,setOptions]= useState(["Select Category",]);
 const [selectedOption,setSelectedOption]=useState();
 const [selectDate,setSelectDate] = useState();
 const [filter,setFilter]= useState([]);

 useEffect(()=>{
   setSelectDate("");
   setSelectedOption("");
    setFilter([]);
 },[]);


 useEffect(()=>{
   const uniqueOptions = new Set();
    List.forEach((elem) => {
      uniqueOptions.add(elem.category.toUpperCase()); 
    });

    setOptions(["Select Category", ...Array.from(uniqueOptions)]);

},[List])


const handleFilter=() => {
   let tempFilter = List; // Start with a copy of the original List

   // Apply category filter
   if (selectedOption && selectedOption!="Select Category") {
     tempFilter = tempFilter.filter(
       (element) => element.category.toUpperCase() === selectedOption.toUpperCase()
     );  
    
   }
   

   // Apply date filter
   if (selectDate) {
     tempFilter = tempFilter.filter((element) => element.date === selectDate);
     
   }
   console.log(tempFilter);
   setFilter(tempFilter); 
   console.log(filter);
 

   // Update filter after applying both conditions
 }



    return(<>
    <div className="flex font-bold justify-center gap-8 mt-10">

    


    <div className="flex max-h-[50px] overflow-auto justify-center">
    {/* Here you will select the different Categories.. */}
    <label for="Categroy mx-5">Category :-</label>
<select id="Category" className="border" value={selectedOption} onChange={(e)=>{setSelectedOption(e.target.value)}}>
{
    options.map(categ=> <option value={categ}>{categ}</option>)
}
</select>
         </div>
           
           {/* Here you will select  the Date.. */}
           <div>
           <label for="date" className="mx-4">Date</label>
            <input id="date" className="border-2" type="date" value={selectDate} onChange={(e)=> setSelectDate(e.target.value)} ></input>
           </div>
     
           <div className="text-lg"> <button onClick={handleFilter}>Filter Now </button> </div>

  </div>    
    <div className=" justify-center">
    <table className=" table-auto mt-[60px] px-6 flex flex-col items-center ">
        <thead>
        <tr className="ml-[100px] border" >
            <th className="h-[20px] w-[100px] border">S.NO</th>
            <th className="h-[20px] w-[200px] border">EXPENSE NAME</th>
            <th className="h-[20px] w-[150px] border">AMOUNT</th>
            <th className="h-[20px] w-[200px] border"> CATEGORY</th>
            <th className="h-[20px] w-[200px] border">DATE</th>
            <th className="h-[20px] w-[230px] border">
             Action
            </th>
            
            </tr> </thead>
            <tbody>
       {
         filter.length>0 ? filter.map((element,index)=> <Data item={element} index={index}/>):<div className=" mt-[50px] font-bold">No Expenses </div>
      } </tbody>
      </table>
      
    </div>     

    </>)
}



