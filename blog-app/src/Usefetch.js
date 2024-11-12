import { useState,useEffect } from "react";
const Usefetch=(url)=>{
   const[data,datastate]=useState(null);
   const[ispending,penstate]=useState(true);
   const[error,errorstate]=useState(null);
   useEffect(()=>{setTimeout(()=>{
    fetch(url)
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
        errorstate(error.message);
        penstate(false);
    })
  },1000);
  
  },[url]) 
    return({data,error,ispending});
}
export default Usefetch;