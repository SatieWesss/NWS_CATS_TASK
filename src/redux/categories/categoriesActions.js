import axios from "axios";
import { getCategories } from "../../apis";
import { FETCH_CAT_CATEGORIES_REQUEST, FETCH_CAT_CATEGORIES_SUCCESS, FETCH_CAT_CATEGORIES_FAILURE } from "./categoryTypes"

const fetchCategories = () => {
    return {
        type: FETCH_CAT_CATEGORIES_REQUEST
    }
};

const fetchCategoriesSuccess = (categories) => {
    return {
        type: FETCH_CAT_CATEGORIES_SUCCESS,
        payload: categories
    }
};

const fetchCategoriesFailure = (error) => {
    return {
        type: FETCH_CAT_CATEGORIES_FAILURE,
        payload: error
    }
};

export const fetchCategoriesAction = () => {
    return(dispatch) => {
        dispatch(fetchCategories())
        axios.get(getCategories)
        .then(response => {
            dispatch(fetchCategoriesSuccess(response.data))
        })
        .catch(error => {
            dispatch(fetchCategoriesFailure(error))
        })
    }
    
}