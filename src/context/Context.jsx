import { createContext, useState } from "react";
import run from '../Config/gemini'

export const Context = createContext()

const ContextProvider = (props) => {
    const [input,setInput]= useState("");
    const [recentprompt,setRecentprompt]=useState("");
    const [prevprompt,setPrevprompt]=useState([]);
    const [showresult,setShowresult]=useState(false);
    const [loading,setLoading]=useState(false);
    const[resultdata,setResultdata]=useState("")



    const onSent = async(prompt) => {

     
        await run(prompt)
      
    }
   


     const contextValue = {
        prevprompt,
        setPrevprompt,
        onSent,
        setRecentprompt,
        recentprompt,
        showresult,
        loading,
        resultdata,
        input,
        setInput,
        newChat

        
     }

    return(
        <Context.Provider value = {contextValue}>
         {props.children}
        </Context.Provider>
    )
}

export default ContextProvider 