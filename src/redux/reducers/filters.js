const initialState = {
    sortBy: 'popular'
}

const filters = (state = initialState, action) => {
    if(action.type === 'SET_SORT_BY'){
        return {
            sortBy: action.payload
        };
    }

    return state;
}

export default filters 