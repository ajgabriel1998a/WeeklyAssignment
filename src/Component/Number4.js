import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const Number4 = () => {


    let _ = require('lodash');
    var arrOne = [{
        id: 20,
        name: 'alex'
    },
    {
        id: 30,
        name: 'alina'

    }
    ];

    var arrTwo = [{
        id: 40,
        name: 'hello'

    }, {
        id: 30,
        name: 'world'
    }];

    let xor = _.xorBy(arrOne, arrTwo, (item) => item.id);
    //console.log(xor);

    const str = ['u', 'ec']

    const arr = [{
        storageVal: 'u',
        table: ['E', 'F']

    }, {
        storageVal: 'data',
        id: 3
    }, {
        storageVal: 'ec',
        table: ['E']
    }]

    const a = [['E'], ['F']]  

    console.log(_.map(arr, 'table'));
    const t = [['E', 'F'], [['F'], ['G']]];
    var map = _.map(arr, 'table');
    var flatten = _.flatten(a);
    var union = _.flattenDeep(t);
    var unions =  _.sortedUniq(union);





    return (
        <>
            <center>
                <Card sx={{ maxWidth: 745 }}>


                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Symmetrical Difference of 2 Arrays:
                            {xor.map(emp => {
                                return (
                                    <>
                                        <div >
                                            {emp.id}<br />
                                            {emp.name}
                                        </div>
                                    </>
                                )
                            })}
                        </Typography>
                    </CardContent>
                </Card><br />

                <Card sx={{ maxWidth: 745 }}>


                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Get all the tables ['E', 'F'], ['E']:
                            {map.map(emp => {
                                return (
                                    <>
                                        <div >
                                            {emp}
                                        </div>
                                    </>
                                )
                            })}
                        </Typography>
                    </CardContent>
                </Card><br />

                <Card sx={{ maxWidth: 745 }}>


                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Flatten an array :
                            {flatten.map(emp => {
                                return (
                                    <>
                                        <div >
                                            {emp}
                                        </div>
                                    </>
                                )
                            })}
                        </Typography>
                    </CardContent>
                </Card><br />

                <Card sx={{ maxWidth: 745 }}>


                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Output E F G :
                            {unions.map(emp => {
                                return (
                                    <>
                                        <div >
                                            {emp}
                                        </div>
                                    </>
                                )
                            })}
                        </Typography>
                    </CardContent>
                </Card><br />

            </center>



        </>
    )
}



export default Number4;
