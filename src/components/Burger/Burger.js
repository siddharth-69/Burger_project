import React from 'react'
import classes from './Burger.css'
import BurgerIngredients from './BurgerIngredient/BurgerIngredient'

function Burger() {
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            <BurgerIngredients type="cheese"/>
            <BurgerIngredients type="meat"/>
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default Burger
