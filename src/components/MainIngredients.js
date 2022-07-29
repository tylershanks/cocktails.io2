import React, {useState, useEffect} from 'react'
import './MainIngredients.css'
import { ToggleButton } from '@mui/material'
import { ToggleButtonGroup } from '@mui/material'
import Container from '@material-ui/core/Container'
import VodkaDrinkTray from './VodkaDrinkTray'
import GinDrinkTray from './GinDrinkTray'
import RumDrinkTray from './RumDrinkTray'
import TequilaDrinkTray from './TequilaDrinkTray'
import WhiskeyDrinkTray from './WhiskeyDrinkTray'
import OtherDrinkTray from './OtherDrinkTray'
import '@fontsource/roboto/300.css';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';


function MainIngredients() {

    //text used as a reference for functions
    //displayText used to display on the buttons
    const mainIngredientArray = [
        {
            text: 'Vodka',
            displayText: 'Vodka'
        },
        {
            text: 'Gin',
            displayText: 'Gin'
        },
        {
            text: 'Rum',
            displayText: 'Rum'
        },
        {
            text: 'Tequila',
            displayText: 'Tequila'
        },
        {
            text: 'Whiskey',
            displayText: 'Whiskey'
        },
        {
            text: 'Other',
            displayText: 'Other'
        }
    ]

    const mainIngredientArraySmall = [
        {
            text: 'Vodka',
            displayText: 'Vo'
        },
        {
            text: 'Gin',
            displayText: 'Gn'
        },
        {
            text: 'Rum',
            displayText: 'Rm'
        },
        {
            text: 'Tequila',
            displayText: 'Tq'
        },
        {
            text: 'Whiskey',
            displayText: 'Wh'
        },
        {
            text: 'Other',
            displayText: 'Ot'
        }
    ]

    const [alignment, setAlignment] = React.useState('');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };


    // event to handle when main ingredients are clicked and different
    //recipes need to be shown

    const [show, setShow] = useState('');
    const handleShowClick = (i) => {
        console.log(show)
        console.log(i)
        if(show === i){
            setShow('')
        }else{
            setShow((prev) => i)
        }
    }

    const handleShowDropdown = (i) => {
        console.log(show)
        console.log(i)
            setShow(i.target.value)
        
    }

    //=================================
    // used to change which toggle button group is rendered depending on window size
        const [isDesktop, setDesktop] = useState(window.innerWidth > 599);
      
        const updateMedia = () => {
          setDesktop(window.innerWidth > 599);
        };
      
        useEffect(() => {
          window.addEventListener("resize", updateMedia);
          return () => window.removeEventListener("resize", updateMedia);
        });
    //=================================

    let mainIngredientButtons = mainIngredientArray.map((item, i) => (
        <ToggleButton
            key={i}
            value={item.text}
            onClick={() => show === show ? handleShowClick(item.text) : null}

            sx={{ 
                maxWidth: '20%',
                width: {
                    xs: '50px', // 0 - 599
                    sm: '90px', // 600 - 899
                    md: '90px', // 900 - 1199
                    lg: '90px', // 1200 - 1535
                    xl: '90px', // 1535+
                }
            }}
        >
            <Typography fontSize='1rem'>
                    {item.text}
            </Typography>
            
        </ToggleButton>
    ))

    let mainIngredientButtonsSmall = mainIngredientArraySmall.map((item, i) => (
        <ToggleButton
            key={i}
            value={item.text}
            onClick={() => show === show ? handleShowClick(item.text) : null}

            sx={{ 
                maxWidth: '20%',
                width: {
                    xs: '36px', // 0 - 599
                    sm: '80px', // 600 - 899
                    md: '90px', // 900 - 1199
                    lg: '90px', // 1200 - 1535
                    xl: '90px', // 1535+
                }
            }}
        >
            <Typography fontSize='1rem'>
                    {item.displayText}
            </Typography>
            
        </ToggleButton>
    ))

    let mainIngredientDropDownTray = mainIngredientArray.map((item, i) => (
        <MenuItem 
            key={i}
            value={item.text}
        >
            <Typography fontSize='1rem'>
                    {item.text}
            </Typography>
            
        </MenuItem >
    ))

    let mainIngredientDropDown = 
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{show ? show : "Main Alcohol"}</InputLabel>
        <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Main Alcohol"
                onChange={handleShowDropdown}
            >
                {mainIngredientDropDownTray}
        </Select>
      </FormControl>
    </Box>

    // if screen width is less than 450 pixels, swap to small text array
    // let mainIngredientButtonSelector = if ()

    return (
        <Container className='FullTable'> {/* The whole thing */}
            <Container>
            {isDesktop ? (
                <ToggleButtonGroup
                    sx={{ 
                        color: '#030e12',
                        // bgcolor: '#5bccf6',
                        maxWidth: 'xs'
                    }}
                    value={show}
                    exclusive
                    onChange={handleChange}
                >
                    {mainIngredientButtons}
                </ToggleButtonGroup>
                ) : (
                    <ToggleButtonGroup
                        sx={{ 
                            color: '#030e12',
                            // bgcolor: '#5bccf6',
                            maxWidth: 'xs'
                        }}
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                    >
                        {mainIngredientDropDown}
                    </ToggleButtonGroup>
                )}
                
                
            </Container>

            <Container className='DrinkTrays'
                maxWidth="sm"
            >
                { show === 'Vodka' ? <VodkaDrinkTray/> : null }
                { show === 'Gin' ? <GinDrinkTray/> : null }
                { show === 'Rum' ? <RumDrinkTray/> : null }
                { show === 'Tequila' ? <TequilaDrinkTray/> : null }
                { show === 'Whiskey' ? <WhiskeyDrinkTray/> : null }
                { show === 'Other' ? <OtherDrinkTray/> : null }
            </Container>
        </Container>
    )
}

export default MainIngredients;