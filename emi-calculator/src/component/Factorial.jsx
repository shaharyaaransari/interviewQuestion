import React, { useState } from 'react'

export const Factorial = () => {
       const [fact,setFact] = useState("");
         const [factNo,setFactNo] = useState();
           const[num,setNum] = useState('')
             const [showFact,SetShowFact] = useState('')
   const handleFind = ()=>{
     
        
            let res =1;
             let str = '';
       for(let i=fact;i>=1;i--){
          if(i===1){
            str +=i;
          }else{
            str += i + " X ";
          }
             
          res *= i
       }
   SetShowFact(str)
         setFactNo(res);
         setNum(fact)
           setFact('')
   }
  return (
    <div>
   <h3>Find the Factorial of a no.</h3>
      <input type="text" placeholder='Enter a no' value={fact} onChange={(e)=>setFact(+e.target.value)} />
        <button onClick={handleFind}>Find</button>
         {factNo && <p>Factorial No of a {num}</p> }
          {factNo && <p>{showFact }= {factNo}</p>}
    </div>
  )
}
