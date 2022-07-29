import React from 'react';
import { useState } from 'react';
import './RecipeTray.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function RecipeTray( {ingredient, sendDrink, allDrinks} ) {

    const drinkName = allDrinks[0][sendDrink].drinkName; //drink name
    const recipeLink = allDrinks[0][sendDrink].recipeLink; // recipeLink object
    const youtubeLink = allDrinks[0][sendDrink].youtubeLink; // youtubeLink object
    const ingredients = allDrinks[0][sendDrink].ingredients;
    const steps = allDrinks[0][sendDrink].steps;

    let ingredientsListed = ingredients.map(function(line, i) {
        return (
            <Typography 
                key={i}
                variant='body1'
            >
                {ingredients[i]}
            </Typography>
        )
    })

    let stepsListed = steps.map(function(line, i) {
        return (
            <Typography 
                key={i}
                variant='body1'
            >
                {steps[i]}
            </Typography>
        )
    })



    return (
        <div>
            <div className='RecipeTray'>
                {/* Ingredients and Links and stuff */}
                {/* This will pop up under each individual drink */}

                {/* SendDrink is the index of the current drink we want */}
                <div>
                <Divider>
                    <Typography variant='body2'>
                        Ingredients
                    </Typography>
                </Divider>
                <Box
                    sx={{
                        boxShadow: 0, // theme.shadows[1]
                        color: '#030e12', // theme.palette.primary.main
                        m: 1, // margin: theme.spacing(1)
                        p: {
                          xs: 1, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                        },
                        zIndex: 'tooltip', // theme.zIndex.tooltip
                      }}
                    >
                        <Paper
                            sx={{
                                boxShadow: 0, // theme.shadows[1]
                                color: '#030e12', // theme.palette.primary.main
                                bgcolor: '#fcde67'
                              }}
                        >
                            {ingredientsListed}
                        </Paper>
                </Box>
                        <Divider>
                            <Typography variant='body2'>
                                Steps
                            </Typography>
                        </Divider>
                <Box
                    sx={{
                        boxShadow: 0, // theme.shadows[1]
                        color: '#030e12', // theme.palette.primary.main
                        m: 1, // margin: theme.spacing(1)
                        p: {
                          xs: 1, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                        },
                        zIndex: 'tooltip', // theme.zIndex.tooltip
                      }}
                    >
                        {stepsListed}
                    </Box>
                    <Divider>
                            <Typography variant='body2'>
                                Links
                            </Typography>
                        </Divider>
                    <Box
                        display='flex'
                        justifyContent='center'
                        mt={1}
                    >
                        <Typography mr={10} ml={1}>
                            <Link 
                                href={recipeLink}
                                color="#5bccf6"
                                rel="noopener noreferrer"
                                target='_blank'
                                zIndex='100'
                            >
                                Recipe Link
                            </Link>
                        </Typography>
                        <Typography>
                            <Link 
                                href={youtubeLink}
                                color="#5bccf6"
                                rel="noopener noreferrer"
                                target='_blank'
                            >
                                YouTube Link
                            </Link>
                        </Typography>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default RecipeTray;