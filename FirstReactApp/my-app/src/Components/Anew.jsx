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
      <img src={image} alt=" Image" width={200} height={200}></img> /
    </div>
  );
    
    
}


  

    
  


export default Anew;