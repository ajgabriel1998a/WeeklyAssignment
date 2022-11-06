import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Contactus = () => {

    return (
        <center>
            <Card sx={{ maxWidth: 1000 }}>
            <Typography gutterBottom variant="h5" component="div">
                        Location
                    </Typography>
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe width="1000" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a>
                        <br /><a href="https://www.embedgooglemap.net"></a></div></div>

            </Card><br />

            <Card sx={{ maxWidth: 1000 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Contact Number
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <label>928362820</label><br />

                    </Typography>
                </CardContent>

            </Card><br />

            <Card sx={{ maxWidth: 1000 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Email ID
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <label>aaron.gabriel@upskilltoday.onmicrosoft.com</label><br />

                    </Typography>
                </CardContent>

            </Card><br />
        </center>
    )


}

export default Contactus;
