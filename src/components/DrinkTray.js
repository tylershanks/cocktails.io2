import React from 'react';
import './DrinkTray.css';
import RecipeTray from './RecipeTray';
import { VodkaDrinksArray, GinDrinksArray, RumDrinksArray, TequilaDrinksArray, WhiskeyDrinksArray } from './AllRecipes';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function DrinkTray() {

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

const handleExpandClick = (i) => {
    setTimeout(() => {
        setExpanded(expanded === i ? -1 : i);
    }, 10000);
};
      

    return (
        <>
        <div className='DrinkTray'>
            {/* Drinks */}
            {/* This will pop up when something from the main ingredients list is clicked */}

            {/* Vodka drinks for when Vodka drinks is selected */}
            {VodkaDrinksArray.map((item, i) => (
                    <Card className={item.drinkName} 
                        key={item.drinkName}
                    >
                        <CardActionArea
                            expand={expanded}
                            onClick={() => handleExpandClick(i)}
                            aria-expanded={expanded === i}
                        >
                        <CardHeader
                            title={item.drinkName}
                        />
                        <Collapse in={expanded === i} timeout="auto" unmountOnExit>
                            <CardContent>
                                <RecipeTray />
                            </CardContent>
                        </Collapse>
                        </CardActionArea>
                    </Card>
            ))}
            
            {/* Gin drinks for when Gin drinks is selected */}
            {GinDrinksArray.map((item, i) => (
                    <Card className={item.drinkName} 
                        key={item.drinkName}
                    >
                        <CardActionArea
                            expand={expanded}
                            onClick={() => handleExpandClick(i)}
                            aria-expanded={expanded === i}
                        >
                        <CardHeader
                            title={item.drinkName}
                        />
                        <Collapse in={expanded === i} timeout="auto" unmountOnExit>
                            <CardContent>
                                <RecipeTray />
                            </CardContent>
                        </Collapse>
                        </CardActionArea>
                    </Card>
            ))}

            {/* Rum drinks for when Rum drinks is selected */}
            {RumDrinksArray.map((item, i) => (
                    <Card className={item.drinkName} 
                        key={item.drinkName}
                    >
                        <CardActionArea
                            expand={expanded}
                            onClick={() => handleExpandClick(i)}
                            aria-expanded={expanded === i}
                        >
                        <CardHeader
                            title={item.drinkName}
                        />
                        <Collapse in={expanded === i} timeout="auto" unmountOnExit>
                            <CardContent>
                                <RecipeTray />
                            </CardContent>
                        </Collapse>
                        </CardActionArea>
                    </Card>
            ))}

            {/* Tequila drinks for when Tequila drinks is selected */}
            {TequilaDrinksArray.map((item, i) => (
                    <Card className={item.drinkName} 
                        key={item.drinkName}
                    >
                        <CardActionArea
                            expand={expanded}
                            onClick={() => handleExpandClick(i)}
                            aria-expanded={expanded === i}
                        >
                        <CardHeader
                            title={item.drinkName}
                        />
                        <Collapse in={expanded === i} timeout="auto" unmountOnExit>
                            <CardContent>
                                <RecipeTray />
                            </CardContent>
                        </Collapse>
                        </CardActionArea>
                    </Card>
            ))}

            {/* Whiskey drinks for when Whiskey drinks is selected */}
            {WhiskeyDrinksArray.map((item, i) => (
                    <Card className={item.drinkName} 
                        key={item.drinkName}
                    >
                        <CardActionArea
                            expand={expanded}
                            onClick={() => handleExpandClick(i)}
                            aria-expanded={expanded === i}
                        >
                        <CardHeader
                            title={item.drinkName}
                        />
                    </CardActionArea>
                        <Collapse in={expanded === i} timeout="auto" unmountOnExit>
                            <CardContent>
                                <RecipeTray />
                            </CardContent>
                        </Collapse>
                        
                    </Card>
            ))}

            
        </div>
        </>
    )
}

export default DrinkTray;