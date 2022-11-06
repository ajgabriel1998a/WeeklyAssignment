import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const Signup = () => {
    const[state,setState] = useState({
        name: '',
        error: {
            nameError: '',
            
        },
        formValid: false
    });

    const handleChange = (e) => {
        console.log(e);
        console.log(e.target.value);
        console.log(typeof (e.target.value));
        console.log(e.target.id);

        if (e.target.id === 'name') {
             validateName(e.target.value);
        }
        
    
    }

    const validateName = (name) => {
        let nameError =  state.nameError;
        let formValid =  state.formValid;

        if (name.trim() === '') {
            
            name = 'This field is required';
            formValid = false;

        }
        else if (name.trim().length <= 3) {
            nameError = 'Please enter more than 20 characters';
            formValid = false;
        }
        else {
            formValid = true;
            nameError = '';
        }
         setState({
            name: name,
            formValid,
            error: { ... state.error, nameError }
        });

        return formValid;
    }


    


 


    const handleSubmit = (e) => {
        e.preventDefault();

        if ( validateName(state.name)) {
            alert('Account is Successfully Created!');
             props.addData(state);
             setState({
                name: '',

            });
        }
    
    }

        return (
            <div>


                <Box

                    style={{ padding: "10px" }}
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                        border: '1px dashed grey'


                    }}
                    noValidate
                    autoComplete="off"

                >
                    <div>
                        <form onSubmit={ handleSubmit}>
                            <TextField
                                id="name"
                                onChange={ handleChange}
                                multiline
                                rows={4}
                                label="Feedback"
                                defaultValue={ state.firstname}
                            /><br />{ state.error.nameError}<br />
                            
                            

                            <Button type="submit" variant="contained">Submit Feedback</Button>
                        </form>



                    </div>

                </Box> <br />

            </div>
        )
    }
export default Signup;


