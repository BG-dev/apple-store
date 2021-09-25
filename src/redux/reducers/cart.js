const initialState = {
    items: []
}

const cart = (state = initialState, action) => {
    if(action.type === 'SET_CART'){
        return {
            items: action.payload
        };
    }
    return state;
}

export default cart 