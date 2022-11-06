import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link, NavLink } from "react-router-dom";


const Navbar = () =>{

        return (
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>

                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Navigation Bar
                            </Typography>
                            <Button color="inherit"><Link to='/dashboard'>Number 1</Link></Button>
                            <Button color="inherit"><Link to='/number2'>Number 2</Link></Button>
                            <Button color="inherit"><Link to='/number3'>Number 3</Link></Button>
                            <Button color="inherit"><Link to='/number4'>Number 4</Link></Button>
                            <Button color="inherit"><Link to='/contactus'>Contact Us</Link></Button>

                        </Toolbar>
                    </AppBar>
                </Box> <br />
                
            </div>
        )
    
}
export default Navbar;
