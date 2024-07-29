import { useEffect, useState } from "react"


  export const useDebounce = (value,delay)=>{
    const [debounceVal,setDebounceVal] = useState(value);

      useEffect(()=>{
      let clearTimer;
      
        clearTimer = setTimeout(()=>{
           setDebounceVal(value)
        },delay)
      return ()=>{clearTimeout(clearTimer)}
      },[value,delay])

   return debounceVal;
  }