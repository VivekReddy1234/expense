import Analytics from "./Analytics";
import { useTrackContext } from "./Context/ContextApi"
import Data from "./Data";

export default function Table(){
  const {List} = useTrackContext();

    return (<>
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
            { List.length>0?(
          List.map((item,index)=>(
           <Data item={item} index={index}/>
          ))):<div> </div>  
            }
            </tbody>
        </table>
        <div className="overflow-scroll">
          <Analytics/>
        </div>
    </>)
}