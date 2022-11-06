import React, { Component } from "react";
import axios from "axios";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import LifecycleComponent from "./LifecycleComponent";

export default class Dashboard extends Component {
    state = {
        movies: []
    }

    componentDidMount = () => {

        axios.get('https://fake-movie-database-api.herokuapp.com/api?s=star%20wars').then((res) => {
            console.log(res.data.Search);
            this.setState({
                movies: res.data.Search
            });

        }).catch(err => console.log(err));
    }


    render() {

        const movies = this.state.movies.map((movie => {
            return (

                <div>

                    <center>
                        
                        <Card sx={{ maxWidth: 745 }} key={movie.imdbID}>
                            <CardMedia
                                component="img"
                                height="540"
                                width="700"
                                image={movie.Poster}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {movie.Title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <label>Date: {movie.Year}</label><br />

                                </Typography>
                            </CardContent>

                        </Card><br />
                    </center>
                </div>
            )
        }));
        return (
            <>
            <center>
            <LifecycleComponent/>
            </center>   
            </>
        )
    }
}
