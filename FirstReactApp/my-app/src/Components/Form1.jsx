import React, { useEffect } from 'react'
import { Box, Button, Checkbox, Container, CssBaseline, Divider, FormControl, FormControlLabel, FormGroup,  FormHelperText,  FormLabel, Grid, InputLabel, MenuItem,
     Radio, RadioGroup, Select, TextField} from '@mui/material';
import { useState } from "react";
import Confirmation from './Confirmation';

const Form1=(props)=> {
    const[firstname, setFirstName]=useState("" );
    const[middlename, setMiddleName]=useState("" );
    const[lastname, setLastName]=useState("" );
    const [gender, setGender]=useState("" );
    const [age, setAge]=useState(" ");
    const[course,setCourse]=useState(" ");
    // const[checked,setChecked]=useState(" ");
    const [coffee,setCoffee] = useState("")
    const [espresso,setEspresso]= useState("")
    const [cappachinoo,setCappachinoo]= useState("")
    const [flatwhite,setFlatwhite]= useState("")
    const [longblack,setLongblack]= useState("")
   
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
    setCourse(event.target.value)
    const form={...completeForm};
    form.course=event.target.value;
    setCompleteForm(form);
};

 const handleSubmit=()=>{
   console.log(completeForm);
  setFormToPropagate(completeForm);
  };

 const oncoffeechange = (event)=>{
 console.log('Cofee i Like >>', event.target.value);
 setCoffee(event.target.value);
 const form={...completeForm};
 form.coffee=event.target.value;
 setCompleteForm(form);
  };
 
 const onCheckBox1Change = (event)=>{
//  console.log('confee i like >>', event.target.value);                       
 setEspresso(event.target.value);
 const form={...completeForm};
 form.coffee=event.target.value;
 setCompleteForm(form);

                        };

  const onCheckBox2Change = (event) => {
    setCappachinoo(event.target.value);
    const form = { ...completeForm };
    form.coffee = event.target.value;
    setCompleteForm(form);
}
const onCheckBox3Change = (event) => {
    setFlatwhite(event.target.value);
    const form = { ...completeForm };
    form.coffee = event.target.value;
    setCompleteForm(form);
}

const onCheckBox4Change = (event) => {
    setLongblack(event.target.value);
    const form = { ...completeForm };
    form.coffee = event.target.value;
    setCompleteForm(form);
}


 useEffect(() => {
    setGender('female');
    setAge('Age');
}, [setGender][setAge]);

return (
    <>
      <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
             {/* <Typography variant='h3'>Form</Typography> */}
             <Box sx={{display:"flex", flexDirection:'column' , bgcolor: '#cfe8fc',padding:5,border:' 2px solid black'}} >
             <FormControl >
                  <Box sx={{height:"10px"}}/>
                  <Box sx={{bgcolor:"orange",display:'flex',flexDirection:'row',justifyContent:'center'}}>Addmission Form</Box><br />
                  <Divider />
                 
                  <FormLabel sx={{color:'blue'}}>Personal Info</FormLabel><br />
                   {/* <Grid container spacing={4}>
                    <Grid item xs={4}> */}
                   <Box sx={{dispaly:'flex',border:"1px dashed teal" ,padding:2 , justifyContent:"space-between"}}> 
                  <TextField  id="demo-helper-text-aligned" label="FirstName" value={firstname} variant="outlined"  onChange={onFirstNameChange}/>
                  {/* </Grid>
                  <Grid item xs={4}> */}
                  <TextField id="middlename" label="MiddleName"  value={middlename} variant="outlined"  onChange={onChangeMiddleName}/>
                  {/* </Grid>
                  <Grid item xs={4}> */}
                  <TextField id="lastname" label="LastName" value={lastname} variant="outlined" onChange={onChangeLastName} />
                   </Box> 
                  {/* </Grid>
                  </Grid> */}
                  </FormControl>
                
                  
                <FormLabel sx={{color:'blue'}}>Gender</FormLabel>
                <Box sx={{display:'flex'}}>
                {/* <Grid container spacing={4}>
                    <Grid item xs={6}> */}
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" Value={gender} name="radio-buttons-group" onChange={onGenderFieldChange}>
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                {/* </Grid>
                </Grid> */}
                
                {/* <Grid container spacing={4}>
                    <Grid item xs={6}> */}
                    <FormControl sx={{width:300,marginLeft:30}}>
                    <FormLabel sx={{color:'blue'}} value={"coffee"} onChange>Coffee I Like</FormLabel>
                    <Box sx={{ display: 'flex' }}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox  value={'espresso'} onChange={onCheckBox1Change} name="espresso" /> } label="espresso" />
                        <FormControlLabel control={<Checkbox value={'cappachinoo'} onClick={onCheckBox2Change}name="cappachinoo" />}label="cappachinoo"/>
                        <FormControlLabel control={<Checkbox value={'flatwhite'} onClick={onCheckBox3Change}name="flatwhite" />}label="flat white"/>
                        <FormControlLabel control={<Checkbox value={'longblack'}  onClick={onCheckBox4Change} name="longblack" /> } label="long black"/>
                    </FormGroup>
                    </Box>
                    </FormControl>
                    {/* </Grid>
                    </Grid> */}
                
                </Box>
                  <br/>
                  {/* <Grid container spacing={4}>
                    <Grid item xs={4}> */}
                    <Box>
                   <FormControl sx={{width:300}}>
                  <InputLabel sx={{colr:'blue'}}>Age</InputLabel>
                  <Select labelId="Age " id="Age" label="Age" value={age} onChange={handleAgeChange}>
                       <MenuItem value={10}>Ten</MenuItem>
                       <MenuItem value={20}>Twenty</MenuItem>
                       <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>10,20,30,etc...</FormHelperText>
                  </FormControl> 
                    {/* </Grid>
                     <Grid item xs={4}> */}
                     <FormControl sx={{width:300,marginLeft:10}}>
                    <InputLabel id="  ">DeveloperIn</InputLabel>
                  <Select labelId="course" id="course" label="course" value={course} onChange={handleDevpChange}>
                       <MenuItem value={"UI"}>UI</MenuItem>
                       <MenuItem value={"DataBase"}>DataBase</MenuItem>
                       <MenuItem value={"DevOps"}>DevOps</MenuItem>
                       <MenuItem value={"API"}>API</MenuItem>
                  </Select>
                  <FormHelperText>UI,API,DataBase,DevOps</FormHelperText>
                  </FormControl>  
                  {/* </Grid>
                    </Grid> */}
                 
                  </Box>
              {/* <pre>FirstName:{firstname}<br/>
                  MiddleName:{middlename}<br />
                  LastName:{lastname} <br />
                  Gender: {gender}<br />
                  Age:{age}
             </pre>  */}
             {/* <pre>{JSON.stringify(completeForm,null,3)}</pre> */}
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