import axios from "axios";
import { getCatsByCategories, loadMore } from "../../apis";
import { FETCH_IMAGES_BY_CATEGORY_FAILURE, FETCH_IMAGES_BY_CATEGORY_REQUEST, FETCH_IMAGES_BY_CATEGORY_SUCCESS, FETCH_IMAGES_BY_PAGES_FAILURE, FETCH_IMAGES_BY_PAGES_REQUEST, FETCH_IMAGES_BY_PAGES_SUCCESS, NO_SUCH_ID_FOUND } from "./catActionTypes"

const fetchCatsByCategoryRequest = () => {
    return {
        type: FETCH_IMAGES_BY_CATEGORY_REQUEST
    }
};

const fetchCatsByCategorySuccess = (cats) => {
    return {
        type: FETCH_IMAGES_BY_CATEGORY_SUCCESS,
        payload: cats
    }
};

const fetchCatsByCategoryFailure = () => {
    return {
        type: FETCH_IMAGES_BY_CATEGORY_FAILURE
    }
};

const loadMoreRequest = () => {
    return {
        type: FETCH_IMAGES_BY_PAGES_REQUEST
    }
};

const loadMoreSuccess = (moreCats) => {
    return {
        type: FETCH_IMAGES_BY_PAGES_SUCCESS,
        payload: moreCats
    }
};

const loadMoreFailure = () => {
    return {
        type: FETCH_IMAGES_BY_PAGES_FAILURE
    }
};

const categoryNotFound = () => {
    return {
        type: NO_SUCH_ID_FOUND
    }
} 

export const fetchCats = (id) => {
    return dispatch => {
        dispatch(fetchCatsByCategoryRequest())
        axios.get(`${getCatsByCategories}${id}`)
        .then(response => {
            if(!response.data.length){
                dispatch(categoryNotFound())
            }else {
                dispatch(fetchCatsByCategorySuccess(response.data))
            }
        })
        .catch(error => {
            dispatch(fetchCatsByCategoryFailure())
        })
    }
}

export const loadMoreCats = (page) => {
    return dispatch => {
        dispatch(loadMoreRequest())
        axios.get(`${loadMore}${page}`)
        .then(response => {
            dispatch(loadMoreSuccess(response.data))
        })
        .catch(error => dispatch(loadMoreFailure()))
    }
}