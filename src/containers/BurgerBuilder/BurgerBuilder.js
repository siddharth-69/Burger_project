import React, { Component } from 'react'
import Aux from '../../hoc/aux'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from "../../components/Burger/Burger"
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.2,
    bacon:0.9
}

export class BurgerBuilder extends Component {
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        },
        TotalPrice:0,
        purchasable:false,
        purchasing:false
    }

    purchaseHandle=()=>{
        this.setState({purchasing:true})
    }
    updatePurchaseState=(x)=>{
        const sum=Object.keys(x)
                .map(i=>{
                    return x[i]
                })
                .reduce((sum,el)=>{
                    return sum+el
                },0)
        this.setState({
            purchasable:(sum>0)
        })
    }
    addHandler=(type)=>{
        const updatedIngredients={...this.state.ingredients}
        updatedIngredients[type]=this.state.ingredients[type]+1
        let x=INGREDIENT_PRICES[type]
        this.setState({
            ingredients:updatedIngredients,
            TotalPrice:this.state.TotalPrice+x
        })
        this.updatePurchaseState(updatedIngredients)
    }
    removeHandler=(type)=>{
        const updatedIngredients={...this.state.ingredients}
        let x;
        if(updatedIngredients[type]===0){
            x=0
        }
        else{
            x=INGREDIENT_PRICES[type];
            updatedIngredients[type]= updatedIngredients[type]-1
        }
        this.setState({
            ingredients:updatedIngredients,
            TotalPrice:Math.max(0,this.state.TotalPrice-x)
        })
        this.updatePurchaseState(updatedIngredients)
    }
    CancelHandle=()=>{
        this.setState({purchasing:false})
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.CancelHandle}>
                    <OrderSummary ingredient={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                prices={this.state.TotalPrice} 
                ingredientAdded={this.addHandler} 
                ingredientRemoved={this.removeHandler}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandle}/>
            </Aux>
        )
    }
}

export default BurgerBuilder
