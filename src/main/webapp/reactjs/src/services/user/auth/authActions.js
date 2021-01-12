import * as FT from './authTypes';
import axios from 'axios';

export const authenticatorUser = (email, password) => {
    const credentials = {
        email: email,
        password: password
    };
    return dispatch => {
        dispatch({
            type: FT.LOGIN_REQUEST
        });
        axios.post("http://localhost:7999/rest/user/authenticate", credentials)
            .then(response => {
                let token = response.data.token;
                localStorage.setItem("jwtToken", token);
                dispatch(success(true));
            } )
            .catch(error => {
                dispatch(failure());
        });
    };
};

export const logoutUser = () => {
    return dispatch => {
        dispatch({
            type: FT.LOGOUT_REQUEST
            });
        localStorage.removeItem('jwtToken');
        dispatch(success(false));
    };
};


const success = isLoggedIn => {
    return{
        type: FT.SUCCESS,
        payload: isLoggedIn
    };
};

const failure = () => {
    return{
        type: FT.FAILURE,
        payload: false
    };
};
