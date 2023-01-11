import React, { useState } from "react";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
const Text2=(props)=>{
    //const application='Button';

    const[count,setCount]=useState(<CircularProgress/>)

    useEffect(()=>{
        console.log('this is useEffect')
        setTimeout(()=>{
            setCount('Button');
        },3000);
    },[]);
    return(

        <div>
             <h3>Please Click the Submit {count}</h3> 
            <pre>{props.d}</pre>

            
        </div>
    );
};

export default Text2;