import * as FT from "./foodTypes";

const initialState = {
    food: '', error: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FT.SAVE_FOOD_REQUEST:
        case FT.FETCH_FOOD_REQUEST:
        case FT.UPDATE_FOOD_REQUEST: 
        case FT.DELETE_FOOD_REQUEST:
            return {
                ...state
            };
        case FT.FOOD_SUCCESS:
            return{
                food: action.payload,
                error:''
            };
        case FT.FOOD_FAILURE:
            return {
                food: '',
                error: action.payload
            };
        default: return state;
    }
};

export default reducer;