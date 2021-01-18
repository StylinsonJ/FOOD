import {combineReducers} from 'redux';
import userReducer from './user/userReducer';
import foodReducer from './food/foodReducer';

const rootReducer = combineReducers({
    user: userReducer,
    food: foodReducer
});

export default rootReducer;
