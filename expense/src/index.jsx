import { useEffect, useState } from "react";
import { Provider } from "./Context/ContextApi";
import App from "./App";

export default function Index(){
  
    const [List,setList]=useState([]);
    const [options,setOption] = useState(["Select Category ","food","Transport"]);
    const setOptions=(a)=>{
        setOption(a);
      }
    

    return(
        <Provider value={{List,setList,options,setOptions}}>
            <App/>
        </Provider>
    )
}