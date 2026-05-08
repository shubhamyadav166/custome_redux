import { createStore } from 'redux'
import { productList } from './productsList';


const initialState = {
    products: productList,
    cartItems: [],
    wishList: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case action.type = "cart/addItem":
            return {
                ...state, cartItems: [...state.cartItems, { productId: action.payload.productId, quantity: action.payload.quantity }]
            }

        case "cart/removeItem":
            return { ...state, cartItems: state.cartItems.filter((item) => item.productId != action.payload.productId) }

        case "cart/increase_item":
            return {
                ...state, cartItems: state.cartItems.map((item) => {
                    if (item.productId == action.payload.productId) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item
                })
            }
        case "cart/decrease_item":
            return {
                ...state, cartItems: state.cartItems.map((item) => {
                    if (item.productId == action.payload.productId) {
                        if (item.quantity > 1) {
                            return { ...item, quantity: item.quantity - 1 }
                        } else {
                            return state.cartItems.filter((item) => item.productId != action.payload.productId)
                        }

                    }
                    return item
                })
                .filter((item)=>item.quantity>0)
            }
            case action.type="wishList/addItem":
                return {...state,wishList:[...state.wishList,action.payload]}
            case action.type="wishList/remove":
                return {...state,wishList:state.wishList.filter((item)=> item.productId!=action.payload.productId)}

    }
    return state
}



const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__())

store.dispatch({ type: 'cart/addItem', payload: { productId: 5, quantity: 1 } })
store.dispatch({ type: 'cart/addItem', payload: { productId: 3, quantity: 1 } })
store.dispatch({ type: 'cart/removeItem', payload: { productId: 3, quantity: 1 } })

store.dispatch({ type: 'cart/addItem', payload: { productId: 3, quantity: 1 } })
store.dispatch({ type: 'cart/increase_item', payload: { productId: 3, quantity: 1 } })

store.dispatch({ type: 'cart/addItem', payload: { productId: 6, quantity: 1 } })
store.dispatch({ type: 'cart/increase_item', payload: { productId: 5, quantity: 1 } })
store.dispatch({ type: 'cart/decrease_item', payload: { productId: 5, quantity: 1 } })
store.dispatch({ type: 'cart/decrease_item', payload: { productId: 5, quantity: 1 } })
store.dispatch({ type: 'cart/decrease_item', payload: { productId: 5, quantity: 1 } })
store.dispatch({ type: 'cart/decrease_item', payload: { productId: 5, quantity: 1 } })

store.dispatch({ type: 'wishList/addItem', payload: { productId: 5} })
store.dispatch({ type: 'wishList/addItem', payload: { productId: 6} })
store.dispatch({ type: 'wishList/addItem', payload: { productId: 7} })
store.dispatch({ type: 'wishList/addItem', payload: { productId: 8} })
store.dispatch({ type: 'wishList/remove', payload: { productId: 8} })
store.dispatch({ type: 'wishList/remove', payload: { productId: 8} })




console.log("Store value.....", store);

