const initialState = {
    items: []
}

const devices = (state = initialState, action) => {
    if(action.type === 'SET_DEVICES'){
        return {
            ...state,
            items: action.payload
        };
    }
    return state;
}

export default devices 