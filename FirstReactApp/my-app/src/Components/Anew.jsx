import React from 'react'
import './Anew.css'
import MyButton from './MyButton';
import image from "../image/img2.jpg"


 function Anew() {
    
   function gret(name)
  {
    return <h1>Hello {name}</h1>;
  }

   const getTime = () =>{
   return new Date().getDate();
    }
  return (
    <div className='d'>
      <h1><i>Welcome To Patheya Technology</i></h1>
      {gret("World")}
      {getTime()}
      <MyButton />
      
      <img src={image}  width={300} height={100}></img> 
  
    </div>
  );
    
    
}


  

    
  


export default Anew;