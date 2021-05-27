import * as actionTypes from '../actions/actionTypes';

const initialState = {
    language:"ge"
};



const changeLanguage = (state, action) => {
    return {
        ...state,
        language: action.payload,
    }
}
const initLanguage = (state) => {
    return state;
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LANGUAGE: return changeLanguage(state, action);
        case actionTypes.INIT_LANGUAGE: return initLanguage(state);
        default: return state;
    }
};

export default reducer;