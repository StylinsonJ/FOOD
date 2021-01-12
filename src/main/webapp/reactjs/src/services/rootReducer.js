import {combineReducers} from 'redux';
import userReducer from './user/userReducer';
import authReducer from './user/auth/authReducer';
import foodReducer from './food/foodReducer';

const rootReducer = combineReducers({
    user: userReducer,
    food: foodReducer,
    auth: authReducer
});

export default rootReducer;
