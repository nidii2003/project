import { Cart } from './utils/type'
import { createSlice } from '@reduxjs/toolkit';


// Define the initial state using that type
const initialState: Cart[] = [];


export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    //add to cart functionality
    // let uuid =Math.floor(1000+Math.random()*9000)
    addToCart(state, action) {
      let uuid = Math.floor(1000 + Math.random() * 9000)
      let newObject = { ...action.payload, uuid }
      state.push(newObject)
    },
    //delete from cart
    delltem(state, { payload }) {
      return state.filter((val) => val.uuid !== payload);
    },
    //addition of item
    addcart(state,action){
      let obj=state.find((val)=>
      val.id == action.payload.id &&
      val.color == action.payload.color &&
      val.size == action.payload.size );
      if(obj){
        ++obj.quantity;
        let newState = state.filter((val)=>val.id !== obj?.id)
        state = [...newState,obj]
        return;
      }
    },
    
    //subtraction of item
    subtractItem(state,action){
      let obj=state.find((val)=>
      val.id == action.payload.id &&
      val.color == action.payload.color &&
      val.size == action.payload.size );
      if(obj!= undefined){
        if(obj.quantity <=1){
          return state.filter((val)=>val.uuid != obj?.uuid);
        }
        --obj.quantity;
        let newState = state.filter((val)=>val.uuid == obj?.uuid)
        return
      
    }
  }
  },
})

export const { addToCart, delltem, addcart,  subtractItem } = cartSlice.actions

export default cartSlice.reducer