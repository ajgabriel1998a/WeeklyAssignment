import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default class LifecycleComponent extends Component {
    //initialization stage
    constructor() {
        super();//method, to call parent constructor
        // this is referring to LifecycleComponent 
        this.state = {
            backgroundone: 'blue',
            backgroundtwo: 'green'
        }
    }

    componentWillMount = () => {
        //api calls, update state
    }

    componentDidMount = () => {
        //api calls, update state
    }

    handleUpdate = () => {
        this.setState({
            backgroundone: 'green',
            backgroundtwo: 'blue'
        })
    }

    shouldComponentUpdate = () => {
        return true;
    }

    componentWillUpdate = () => {

    }

    componentDidUpdate = () => {

    }


    render() {
        return (
            <>
                
                <Button type="submit" variant="contained" onClick={this.handleUpdate}>Add Background Color</Button><br/>
                <br/>
                <Card sx={{ maxWidth: 1000 }} style={{ backgroundColor: this.state.backgroundone }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Contact Number
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <label>928362820</label><br />

                        </Typography>
                    </CardContent>

                </Card>
                <Card sx={{ maxWidth: 1000 }} style={{ backgroundColor: this.state.backgroundtwo }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Contact Number
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <label>928362820</label><br />

                        </Typography>
                    </CardContent>

                </Card>
            </>
        )
    }
}

//inheritance