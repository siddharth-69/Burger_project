import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredient/BurgerIngredient'

function Burger(props) {
    let transformedIngredients=Object.keys(props.ingredients)
        .map(x=>{
            return [...Array(props.ingredients[x])].map((_,i)=>{
                return <BurgerIngredients key={x+i} type={x} />
            });
        })
        .reduce((arr,el)=>{
            return arr.concat(el)
        },[]);
    
        if(transformedIngredients.length===0){
            transformedIngredients=<h1>Start Making The Burger</h1>
        }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default Burger
