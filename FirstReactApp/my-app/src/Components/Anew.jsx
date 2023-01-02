import React from 'react'
import './Anew.css'
import MyButton from './MyButton';

 function Anew() {
   function gret(name)
  {
    return <h1>Hello {name}</h1>;
  }

   const getTime = () =>{
   return new Date().getDate();
    }
  return (
    <div class='d'>
      <h1><i>Welcome To Patheya Technology</i></h1>
      {gret("World")}
      {getTime()}
      <MyButton />
    </div>
  );
    
    
}


  

    
  


export default Anew;