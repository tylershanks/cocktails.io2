import React from 'react';
import DrinkTray from './DrinkTray';
import './FullTable.css';
import MainIngredients from './MainIngredients';

function FullTable() {

    return (
        <>
        <div className='FullTable'>
            <MainIngredients />
            <DrinkTray />
        </div>
        </>
    )
}

export default FullTable;