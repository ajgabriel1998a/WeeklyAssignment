import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const Number2 = () => {
    const [users, setUsers] = useState({
        name: 'Administrator',
        email: 'admin@admin.com'
    });
    const [fruits, setFruits] = useState({
        name: 'Apple',
        weight: '30kg'
    });

    const change = () => {

        setUsers({
            ...users, email: 'admin@gmail.com'
        });
    }

    const changeTwoProp = () => {

        setFruits({
            ...users, name: 'Orange', weight: '10kg'
        });

    }

    return (
        <>
            <center>

                <Card sx={{ maxWidth: 745 }}>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Arrays:
                            <div >
                                {users.name}<br></br>
                                {users.email}
                            </div>

                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Button variant="contained" onClick={change}>Update Second Index</Button>

                        </Typography>
                    </CardContent>

                </Card><br />
                <Card sx={{ maxWidth: 745 }}>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Arrays:
                            <div >
                                {fruits.name}<br></br>
                                {fruits.weight}
                            </div>

                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Button variant="contained" onClick={changeTwoProp}>Update 2 Property Values</Button>

                        </Typography>
                    </CardContent>

                </Card><br />
            </center>



        </>
    )
}



export default Number2;
