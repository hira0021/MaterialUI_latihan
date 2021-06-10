import { Grid } from '@material-ui/core';
import React from 'react';
import CoffeCard from './CoffeCard';
import CoffeeMakerList from './constants'

const Content = () => {

    const getCoffeeMakerCard = (coffeeMakerObj) =>{
        return (
            <Grid item xs={12} sm={4}>
                <CoffeCard {...coffeeMakerObj} />
            </Grid>
        )
    }

    return (
        <Grid container spacing={2}>
            {CoffeeMakerList.map(coffeeMakerObj => getCoffeeMakerCard(coffeeMakerObj))}
        </Grid>
    )
};

export default Content;