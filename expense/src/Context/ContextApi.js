import { createContext , useContext} from "react";

export const context = createContext({
    List :[{}],
    setList:()=>{},
    options:[],
    setOptions:()=>{}
});

export const useTrackContext=()=>{
    return useContext(context);
}
export const Provider= context.Provider;