import { Box, Button } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react'


const Confirmation=(props) =>{

  

  return (
   <Container maxWidth='md'>
    <Box sx={{bgcolor:'light',display:'flex',flexDirection:'row',justifyContent:'center'}}><h3>Confirm Your Form</h3></Box>
    <Box sx={{display:'flex', bgcolor:'aquamarine',padding:5}}>
        <pre>{JSON.stringify(props.form,null,3)}</pre>
        <br />
        </Box>
        <Box sx={{display:'flex',marginY:2,justifyContent:'flex-end'}}>
          <Button variant="contained" color="success" >Confirm </Button>
          </Box>
   </Container>
  
  )
}

export default Confirmation;
