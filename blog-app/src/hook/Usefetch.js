import { useState,useEffect } from "react";
const Usefetch=(url)=>{
   const[data,datastate]=useState(null);
   const[ispending,penstate]=useState(true);
   const[error,errorstate]=useState(null);

   useEffect(()=>{
    const abortco=new AbortController();
    setTimeout(()=>{
    fetch(url,{signal:abortco.signal})
    .then(res=>{
        if(!res.ok)
            throw Error("not fetched");
        return res.json();
    })
    .then(data=>{
        datastate(data);
        penstate(false);
        errorstate(null);
        
    })
    .catch(error=>{
        if(error==='AbortError'){
            console.log('Aborted');          
        }else{
            errorstate(error.message);
            penstate(false);
        }
        
    })
  },1000);
  return()=>abortco.abort();
  },[url])
    return({data,error,ispending});
}
export default Usefetch;