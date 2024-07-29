import { useEffect, useState } from "react"

export   const useData = (ApiUrl,dependencies)=>{
      const [data,setData]=useState([])
      const fetchData = ()=>{
        fetch(ApiUrl)
        .then((res)=>res.json())
        .then((res)=>setData(res))
        .catch((er)=>console.log(er))
      }

      useEffect(()=>{
          if(dependencies){
            fetchData()
          }else{
            setData([]);
          }
   
      },[ApiUrl,dependencies])
      return {data}
}