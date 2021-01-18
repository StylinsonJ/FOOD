import * as FT from "./foodTypes";
import axios from 'axios';


export const saveFood = food => {
    return dispatch => {
        dispatch({
            type: FT.SAVE_FOOD_REQUEST
        });
        axios.post("http://localhost:7999/rest/foods",food)
            .then(response => {
                dispatch(foodSuccess(response.data));
            })
            .catch(error => {
                dispatch(foodFailure(error));
            });
    };
};

export const updateFood = food => {
    return dispatch => {
        dispatch({
                type: FT.UPDATE_FOOD_REQUEST
        });
        axios.put("http://localhost:7999/rest/foods",food)
            .then(response => {
                dispatch(foodSuccess(response.data));
            })
            .catch(error => {
                dispatch(foodFailure(error));
            });
    };
};

export const deleteFood = foodId => {
    return dispatch => {
        dispatch({
            type: FT.DELETE_FOOD_REQUEST
        });
        axios.delete("http://localhost:7999/rest/foods"+foodId)
            .then(response => {
                dispatch(foodSuccess(response.data));
            })
            .catch(error => {
                dispatch(foodFailure(error));
            });
    };
};

export const fetchFood = foodId => {
    return dispatch => {
        dispatch({
            type: FT.FETCH_FOOD_REQUEST
        });
        axios.get("http://localhost:7999/rest/foods/"+foodId)
            .then(response => {
                dispatch(foodSuccess(response.data));
            })
            .catch(error => {
                dispatch(foodFailure(error));
            });
    };
};

const foodSuccess = food => {
    return{
        type: FT.FOOD_SUCCESS,
        payload: food
    };
}

const foodFailure = error => {
    return{
        type: FT.FOOD_FAILURE,
        payload: error
    };
}