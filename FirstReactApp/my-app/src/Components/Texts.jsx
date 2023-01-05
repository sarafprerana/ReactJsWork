import React from 'react'
import { TextField } from '@mui/material';
 import { useState } from 'react';
// import { useEffect } from 'react';
import Text2 from './Text2';
 import './Anew.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

 const Texts=()=>{
      const [Fname,setFname]=useState(" ");
      const [Lname,setLname]=useState(" ");
      const [Gender,setGender]=useState(" ");
      const [Hobbies, setHobbies]=useState(" ");

      // const [count, setCount] = useState(0);

      // useEffect(() => {
      //   console.log ('You clicked ${count} times');
      // });


  const Rec1={
      fn : Fname,
      ln : Lname,
      Gender : Gender,
      Hobbies : Hobbies
  };
  console.log(Rec1);
  return (
    <div class="a">
      <Avatar sx={{ bgcolor: deepOrange[500] }}>PT</Avatar>
      <h1>Registration Form</h1>
         <br />
         <Grid container spacing={4}>
          <Grid item xs={4}>
         {/* <TextField id="Fname" label="Fname" variant="filled" onChange={(event)=>setFname(event.target.value)}/> */}
           <TextField id="Fname" label="Fname" variant="standard"onChange={(event)=>setFname(event.target.value)} /> <br /> 
          </Grid>
          <Grid item xs={4}>
          <TextField id="Lname" label="Lname" variant="standard"onChange={(event)=>setLname(event.target.value)} /> 
             {/* <TextField id="Lname" label="Lname" variant="filled" onChange={(event)=>setLname(event.target.value)}/> */}
         </Grid>
         </Grid>
         {/* <Text2 d={Fname}/> */}
         <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>

  <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group" >
  <Grid container spacing={4}>
  <Grid item xs={6}>
    <FormControlLabel value="female" control={<Radio />} defaultValue={Gender} onChange={(event) => setGender(event.target.value)} label="Female"/>
    </Grid>
     <Grid item xs={6}>
        <FormControlLabel value="male" control={<Radio />} defaultValue={Gender} onChange={(event) => setGender(event.target.value)} label="Male" />
    </Grid>
    {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
    </Grid>
  </RadioGroup>
</FormControl>
<br />

<FormGroup>

    <FormLabel id="demo-radio-buttons-group-label">Hobbies</FormLabel>
    <Grid container spacing={6}>
  <Grid item xs={6}>
  <FormControlLabel control={<Checkbox  />}defaultValue={Hobbies} onChange={(event) => setHobbies(event.target.value)}  label="Khokho" />
  <FormControlLabel control={<Checkbox/>} defaultValue={Hobbies} onChange={(event) => setHobbies(event.target.value)}  label="Cricket" />
  </Grid>
  </Grid>
  </FormGroup>
<br />
 <Grid container spacing={6}>
  <Grid item xs={6}>
<Button variant="contained">SUBMIT</Button> <br />
<Button variant="contained" href="https://github.com/sarafprerana/ReactJsWork"> Link</Button>
</Grid>
</Grid> 
<br />

<Text2 d={Fname} />
<Text2 d={Lname}/>
<Text2 d={Gender}/>



    </div>
  );
};
export default Texts;