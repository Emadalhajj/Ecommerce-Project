import React from 'react'

import { createSlice } from '@reduxjs/toolkit'

const cardsSlice = createSlice({
  initialState : [],
  name : 'cardsSlice',
  reducers :{
    addToCard : (state , action)=>{
      // console.log("Product being added:", action.payload);
   
      const productsUniq = state.find((items) => items.id === action.payload.id);
      if (productsUniq) {
        productsUniq.quantity += 1;
        // console.log("Updated Product Quantity:", productsUniq);
      } else {
        const productWithQuantity = { ...action.payload, quantity: 1 };
        state.push(productWithQuantity);
        // console.log("New Product Added:", productWithQuantity);
      }
      // console.log("Cart State after update:", JSON.parse(JSON.stringify(state)));

    },
    deleteCard :(state , action)=>{
      return state.filter((item)=> item.id !== action.payload.id)
      
     
      
    },
    clearCard : (state)=>{
        return []
      
    },
    updateQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const product = state.find((item) => item.id === id);
        if (product) {
          product.quantity = quantity;
        }
    }

  }
})

export const {addToCard , deleteCard , clearCard, updateQuantity} = cardsSlice.actions
export default cardsSlice.reducer