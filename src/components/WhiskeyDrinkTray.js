import React from 'react';
import { useState } from 'react';
import './DrinkTray.css';
import RecipeTray from './RecipeTray';
import { WhiskeyDrinksArray } from './AllRecipes';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { CardActionArea } from '@mui/material';
import '@fontsource/roboto/300.css';
import Typography from '@mui/material/Typography';


function WhiskeyDrinkTray() {

    const ExpandMore = styled((props) => {
            const { expand, ...other } = props;
            return <IconButton {...other} />;
        })(({ theme, expand }) => ({
            // transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
        }),
      }));

const [expanded, setExpanded] = React.useState(false);
const [currDrink, setCurrDrink] = React.useState();
const [currIngredient, setCurrIngredient] = React.useState(1);

const handleExpandClick = (i) => {
    setExpanded(expanded === i ? -1 : i);
    setCurrDrink(i);
    sendDrink(i);
};

const sendDrink = (i) => {
    setCurrDrink(i);
  }

const whiskeyDrinks = [
    WhiskeyDrinksArray.map((drinkName => 
        drinkName
    ))
]

const [whiskeyDrinksToSend] = React.useState(whiskeyDrinks);
      
let whiskeyDrinksListed = WhiskeyDrinksArray.map((item, i) => (
    <Card className={item.drinkName}
        sx={{ bgcolor: '#fcde67', m: 1, boxShadow: 3}}
    >
        <CardActionArea
            expand={expanded}
            onClick={() => handleExpandClick(i)}
            aria-expanded={expanded === i}
        >
            <CardHeader
                title={
                    <Typography fontSize='1.5rem'>
                        {item.drinkName}
                    </Typography>
                }
                sx={{ 
                    bgcolor: '#5bccf6',
                    color: '#030e12',
                }}
            />
        </CardActionArea>
            <Collapse in={expanded === i} timeout="auto" unmountOnExit>
                <CardContent
                    sx={{ 
                        bgcolor: '#fcde67'
                    }}
                >
                    <RecipeTray 
                        sendDrink={currDrink} 
                        className={item.drinkName} 
                        ingredient={currIngredient}
                        allDrinks={whiskeyDrinksToSend} 
                    />
                </CardContent>
            </Collapse>
        
    </Card>
))


    return (
        <>
        <div className='WhiskeyDrinkTray'>
            {/* Whiskey Drinks */}
            {/* This will pop up when something from the main ingredients list is clicked */}

            {whiskeyDrinksListed}
        </div>
        </>
    )
}

export default WhiskeyDrinkTray;