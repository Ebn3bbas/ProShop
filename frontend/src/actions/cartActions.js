import axios from 'axios'
import { CART_ADD_ITEM , CART_REMOVE_ITEM} from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) =>
{
    const { data } = await axios.get(`http://localhost:7000/products/`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data[id - 1]._id,
            name: data[id - 1].name,
            image: data[id - 1].image,
            price: data[id - 1].price,
            countInStock: data[id - 1].countInStock,
            qty
        }
        })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) =>
{
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })
    
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}