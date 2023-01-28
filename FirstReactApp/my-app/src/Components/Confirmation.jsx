import { Box, Button, CircularProgress } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';


const Confirmation=(props) =>{
  

   const handleConfirm=()=>{


        alert(JSON.stringify(props.form,null,3));
    
 
   }

  return (
   <Container maxWidth='md'>
    <Box sx={{bgcolor:'light',display:'flex',flexDirection:'row',justifyContent:'center'}}><h1>Confirm Your Form</h1></Box>
    <Box sx={{display:'flex', bgcolor:'aquamarine',padding:5}}>
        <pre>{JSON.stringify(props.form,null,3)}</pre>
        <br />
        </Box>
        <Box sx={{display:'flex',marginY:2,justifyContent:'flex-end'}}>
        
          <Button variant="contained" color="success"  onClick={handleConfirm} >Confirm </Button>
          </Box>
   </Container>
  
  )
}

export default Confirmation;




