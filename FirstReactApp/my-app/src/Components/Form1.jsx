import React, { useEffect } from 'react'
import { Box, Button, Checkbox,  CircularProgress,  Container, CssBaseline, Divider, FormControl, FormControlLabel, FormGroup,  FormHelperText,  FormLabel, Grid, InputLabel, MenuItem,
     Radio, RadioGroup, Select, TextField, Typography} from '@mui/material';
import { useState } from "react";
import Confirmation from './Confirmation';

const Form1=(props)=> {
    const[firstname, setFirstName]=useState(" " );
    const[middlename, setMiddleName]=useState(" " );
    const[lastname, setLastName]=useState("" );
    const [gender, setGender]=useState(" " );
    const [age, setAge]=useState(" ");
    const[course,setCourse]=useState(" ");
    const[selectedCoffees,setSelectedCoffees]=useState([]);
    // const[checked,setChecked]=useState(" ");
    const[submissionInProgress,setSubmissionInProgress]=useState(false);
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
    setSubmissionInProgress(true);
      setTimeout(() => {
          setFormToPropagate(completeForm);
          setSubmissionInProgress(false);
      } ,3000);
       }

  
       useEffect(() => {
        setGender('female');
         setAge('Age');
     }, [setGender]);


     const handleCoffeeChange=(event,type)=>{
      console.log(`${type} is type -${event.target.checked}`);
      

      if(event.target.checked){
        const temp=[...selectedCoffees];
        temp.push(type);
        setSelectedCoffees(temp);
        const form={...completeForm};
        form.selectredCoffees=temp;
        setCompleteForm(form);
      }
      else{
            const temp=[];
            selectedCoffees.forEach((coffee)=>{
              if(coffee !==type){
                  temp.push(coffee);

              }
            });


        setSelectedCoffees(temp);

        const form={...completeForm};
        form.selectredCoffees=temp
        setCompleteForm(form);

      }
     };


    return (
    <>
      <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
             {/* <Typography variant='h3'>Form</Typography> */}
             <Box sx={{display:"flex", flexDirection:'column' ,padding:5,border:' 2px solid black'}} >
                  <Box sx={{height:"10px"}}/>
                  <Box sx={{bgcolor:"orange",display:'flex',flexDirection:'row',justifyContent:'center'}}>
                             <Typography variant='h5'>Addmission Form</Typography> 
                  </Box><br />
                  <Divider />
                 
                  <FormLabel sx={{color:'blue'}}>Personal Info</FormLabel><br />
                    
                     <FormControl >
                     
                   <Box sm={{dispaly:'flex' ,padding:2 , flexDirection:'row', justifyContent:'space-between'}}> 
                   <Grid container spacing={2}>
                    <Grid item sm={4}> 
                  <TextField  id="demo-helper-text-aligned" label="FirstName" value={firstname} variant="outlined"  onChange={onFirstNameChange}/>
                    </Grid>
                    <Grid item sm={4}>
                  <TextField id="middlename" label="MiddleName"  value={middlename} variant="outlined"  onChange={onChangeMiddleName}/>
                  </Grid>
                  <Grid item sm={4}>
                  <TextField id="lastname" label="LastName" value={lastname} variant="outlined" onChange={onChangeLastName} />
                  </Grid>
                   </Grid>
                   </Box>
                  </FormControl> 
                <Box sx={{display:'flex'}}>
                {/* <Grid container spacing={4}>
                    <Grid item xs={6}> */}
                    <FormControl>
                    <FormLabel sx={{color:'blue'}}>Gender</FormLabel>
                    
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" Value={gender} name="radio-buttons-group" onChange={onGenderFieldChange}>
                <Grid container spacing={2}>
                    <Grid item xs={12}> 
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                      </Grid>
                      </Grid>
                </RadioGroup>
                </FormControl>
                {/* </Grid>
                </Grid> */}
                
                {/* <Grid container spacing={4}>
                    <Grid item xs={6}> */}
                    <FormControl sx={{width:300,marginLeft:30}}>
                    <FormLabel sx={{color:'blue'}} >Coffee I Like</FormLabel>
                  <Box sx={{ display: 'flex' }}>
                    <FormGroup>
                    <Grid container spacing={2}>
                    <Grid item xs={12}> 
                    <FormControlLabel control={<Checkbox onChange={(event)=>handleCoffeeChange(event,'Milk')} />} label="Milk" />
                    <FormControlLabel  control={<Checkbox onChange={(event)=>handleCoffeeChange(event,'dark')}/>} label="dark" />
                    <FormControlLabel control={<Checkbox onChange={(event)=>handleCoffeeChange(event,'light')} />} label="light" />
                    <FormControlLabel  control={<Checkbox  onChange={(event)=>handleCoffeeChange(event,'cold')}/>} label="cold " />
                    </Grid>
                    </Grid>
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
                       <MenuItem value={"DevOps"}>DevOps </MenuItem>
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
             {/* <pre>{JSON.stringify(completeForm,null,3)}</pre>*/}
             <Box sx={{marginY:2, display:"flex", justifyContent:"flex-end"}}>
              {submissionInProgress ?(<CircularProgress/> ):(
             <Button variant="contained"  //disabled = {!completeForm.firstname && !completeForm.middlename !==""}
                    onClick={handleSubmit}>SUBMIT</Button> )}
             </Box> 
              {/* {submissionInProgress ?(<CircularProgress/> ):(<Button variant="contained" color="secondary"
                                        //  disabled={(!completeForm.firstName) || (!completeForm.course)} 
                                        onClick={handleSubmit}>Submit {JSON.stringify(submissionInProgress)}
                                    </Button>
              )} */}
                   <Box sx={{marginY:2, display:"flex", justifyContent:"flex-end"}}>
                                 <Button variant="contained"
                                     color="success"
                                         disabled={submissionInProgress}
                                        startIcon={
                                            submissionInProgress ?(<CircularProgress size={10} />
                                            ):(
                                                <></>
                                            )
                                        }
                                        onClick={handleSubmit}>
                                        Submit {JSON.stringify(submissionInProgress)}
                                    </Button>
                                    { submissionInProgress && <CircularProgress/>}
                                    </Box>  
          </Box>
          </Container>
               <Confirmation form = {formToPropagate}/> 
                
      </React.Fragment>
    </>  
    );
  }
  export default Form1;