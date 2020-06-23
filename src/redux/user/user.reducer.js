const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state, //spreads out the properties in state ( name = {state.name})
                currentUser: action.payload //user in user.actions
            }

        default: 
        return state;
    }
}

export default userReducer;