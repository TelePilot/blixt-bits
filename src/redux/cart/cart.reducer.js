import CartActionTypes from './cart.types'

const INITIAL_STATE = {
    hidden: true
}

const cartReducers = (state = INITIAL_STATE, actions) => {
    switch(actions.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
            default:
                return state;
    }
}

export default cartReducers