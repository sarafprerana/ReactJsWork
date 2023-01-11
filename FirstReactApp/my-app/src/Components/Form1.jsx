import React, { useEffect } from 'react'
import { Box, Button, Checkbox, Container, CssBaseline, Divider, FormControl, FormControlLabel, FormGroup,  FormLabel, InputLabel, MenuItem,
     Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import { useState } from "react";
import Confirmation from './Confirmation';


const Form1=(props)=> {
    const[firstname, setFirstName]=useState("" );
    const[middlename, setMiddleName]=useState("" );
    const[lastname, setLastName]=useState("" );
    const [gender, setGender]=useState("" );
    const [age, setAge]=useState(" ");
    const[devp,setDevp]=useState(" ");
    // const[checked,setChecked]=useState(" ");
    const [coffee, setCheckBox1] = useState();
    const[coffee2, setCheckBox2]=useState();
    const[coffee3, setCheckBox3]=useState();
    const[cofee4, setCheckBox4]=useState();
    //  const[label,setLabel]=useState("");

     const [completeForm, setCompleteForm]=useState( );
     const[formToPropagate, setFormToPropagate]=useState( );

    const onFirstNameChange= (event) =>{
        // console.log('event>>',event.target.value);
        setFirstName(event.target.value);
        const form={...completeForm};
        form.firstname=event.target.value;
        setCompleteForm(form);
}; 
const onChangeMiddleName = (event) =>{
    // console.log('event>>',event.target.value);
    setMiddleName(event.target.value);
    const form={...completeForm};
    form.middlename=event.target.value;
    setCompleteForm(form);
};
const onChangeLastName = (event) =>{
    // console.log('event>>',event.target.value);
    setLastName(event.target.value);
    const form={...completeForm};
    form.lastname=event.target.value;
    setCompleteForm(form);
}; 
const onGenderFieldChange=(event)=>{
    setGender(event.target.value);
    const form={...completeForm};
    form.gender=event.target.value;
    setCompleteForm(form);
};
const handleAgeChange=(event)=>{
    setAge(event.target.value)
    const form={...completeForm};
    form.age=event.target.value;
    setCompleteForm(form);
};

const handleDevpChange=(event)=>{
    setDevp(event.target.value)
    const form={...completeForm};
    form.devp=event.target.value;
    setCompleteForm(form);
};

 const handleSubmit=()=>{
   console.log(completeForm);
   setFormToPropagate(completeForm);
  };

  const onCheckBox1Change = (event) => {
    setCheckBox1(event.target.value);
    const form = { ...completeForm };
    form.coffee1 = event.target.value;

    setCompleteForm(form);
}
const onCheckBox2Change = (event) => {
    setCheckBox2(event.target.value);
    const form = { ...completeForm };
    form.coffee2 = event.target.value;

    setCompleteForm(form);
}

const onCheckBox3Change = (event) => {
    setCheckBox3(event.target.value);
    const form = { ...completeForm };
    form.coffee3 = event.target.value;

    setCompleteForm(form);
}
const onCheckBox4Change = (event) => {
    setCheckBox4(event.target.value);
    const form = { ...completeForm };
    form.coffee4 = event.target.value;

    setCompleteForm(form);
}

 useEffect(() => {
    setGender('female');
    setAge(28);
}, [setGender]);

return (
    <>
      <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
             {/* <Typography variant='h3'>Form</Typography> */}
             <Box sx={{display:"flex", flexDirection:'column' ,padding:5,border:' 2px solid black'}} >
             <FormControl >
                  <Box sx={{height:"10px"}}/>
                  <Box sx={{bgcolor:"orange",display:'flex',flexDirection:'row',justifyContent:'center'}}>Addmission Form</Box><br />
                  <Divider />
                 
                  <FormLabel id=" " >Personal Info</FormLabel><br />
                   <Box sx={{dispaly:'flex',border:"1px dashed teal" ,padding:2 , justifyContent:"space-between"}}>
                  <TextField  id="demo-helper-text-aligned" label="FirstName" value={firstname} variant="outlined"  onChange={onFirstNameChange}/>
                  <TextField id="middlename" label="MiddleName"  value={middlename} variant="outlined"  onChange={onChangeMiddleName}/>
                  <TextField id="lastname" label="LastName" value={lastname} variant="outlined" onChange={onChangeLastName} /> 
                  </Box><br />
                  
                <FormLabel id=" ">Gender</FormLabel>
                <Box sx={{display:'flex'}}>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" Value={gender} name="radio-buttons-group" onChange={onGenderFieldChange}>
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup><br />
                <Box sx={{ display: 'flex' }}>
                    <FormControl sx={{ width:300,marginLeft:50 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Coffee I Like</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox value="espresso " onClick={onCheckBox1Change} name="espresso" /> } label="espresso" />
                        <FormControlLabel control={<Checkbox value="cappachinoo "onClick={onCheckBox2Change}name="cappachinoo" />}label="cappachinoo"/>
                        <FormControlLabel control={<Checkbox value="flat white "onClick={onCheckBox3Change}name="flatwhite" />}label="flat white"/>
                        <FormControlLabel control={<Checkbox value="long blank " onClick={onCheckBox4Change} name="longbank" /> } label="long blank"/>
                    </FormGroup>
                    </FormControl>
                </Box>
                </Box><br />
                  {/* <InputLabel id="  ">Age</InputLabel> */}
                  <FormControl sx={{width:300}}>
                  <InputLabel id="  ">Age</InputLabel>
                  <Select
                   labelId="Age " id="Age" label="Age" value={age} onChange={handleAgeChange}>
                    
                       <MenuItem value={10}>Ten</MenuItem>
                       <MenuItem value={20}>Twenty</MenuItem>
                       <MenuItem value={30}>Thirty</MenuItem>
                     
                  </Select>
                    <FormControl sx={{width:300,marginLeft:60}}>
                    <InputLabel id="Devp  ">DeveloperIn</InputLabel>
                  <Select id="Devp" label="Devp" value={devp} onChange={handleDevpChange}>
                    
                       <MenuItem value={UI}>UI</MenuItem>
                       <MenuItem value={DataBase}>DataBase</MenuItem>
                       <MenuItem value={3}>DevOps</MenuItem>
                       <MenuItem value={4}>API</MenuItem>
                     
                  </Select>
                  </FormControl>

                  </FormControl>
              </FormControl>
  
  
             {/* <pre>FirstName:{firstname}<br/>
                  MiddleName:{middlename}<br />
                  LastName:{lastname} <br />
                  Gender: {gender}<br />
                  Age:{age}
             </pre> */}
             <pre>{JSON.stringify(completeForm,null,3)}</pre>
             <Box sx={{marginY: 2,display: "flex",justifyContent: "flex-end",}}>
             <Button variant="contained" onClick={handleSubmit} >SUBMIT</Button> 

             </Box>
          </Box>
          </Container><br/>
               <Confirmation form ={formToPropagate}/> 
                
      </React.Fragment>
    </> 
      
    );
  };
  export default Form1;