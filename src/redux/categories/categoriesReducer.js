import { FETCH_CAT_CATEGORIES_FAILURE,FETCH_CAT_CATEGORIES_SUCCESS, FETCH_CAT_CATEGORIES_REQUEST } from "./categoryTypes";

const initialState = {
    loading:false,
    categories: [],
    error: ''
};

export const categoriesReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_CAT_CATEGORIES_REQUEST:
            return {
                ...state,
                loading:true,
            };
        case FETCH_CAT_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading:false,
                categories: action.payload,
                error: ''                   
            };
        case FETCH_CAT_CATEGORIES_FAILURE:
            return {
                ...state,
                loading:false,
                categories: [],
                error: action.payload
            }
        default: return state
    }
}