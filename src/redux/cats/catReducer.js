import { FETCH_IMAGES_BY_CATEGORY_FAILURE, FETCH_IMAGES_BY_CATEGORY_REQUEST, FETCH_IMAGES_BY_CATEGORY_SUCCESS, FETCH_IMAGES_BY_PAGES_FAILURE, FETCH_IMAGES_BY_PAGES_REQUEST, FETCH_IMAGES_BY_PAGES_SUCCESS, NO_SUCH_ID_FOUND } from "./catActionTypes";

const initialState = {
    loading: false,
    cats: [],
    error: false,
    loadMoreLoading: false,
    loadMoreError:false,
    notFound:false
};

export const catReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_IMAGES_BY_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case FETCH_IMAGES_BY_CATEGORY_SUCCESS: 
            return {
                ...state,
                cats:action.payload,
                loading:false,
                notFound:false
            }
        case FETCH_IMAGES_BY_CATEGORY_FAILURE:
            return {
                ...state,
                error:true,
                loading:false
            };
        case NO_SUCH_ID_FOUND:
            return {
                loading: false,
                cats: [],
                error: false,
                loadMoreLoading: false,
                loadMoreError:false,
                notFound: true
            }
        case FETCH_IMAGES_BY_PAGES_REQUEST:
            return {
                ...state,
                loadMoreLoading: true,
                loadMoreError:false
            };
        case FETCH_IMAGES_BY_PAGES_SUCCESS:
            return {
                loading: false,
                cats: [...state.cats,...action.payload],
                error: false,
                loadMoreLoading: false,
                loadMoreError:false,
                notFound: false
            }
        case FETCH_IMAGES_BY_PAGES_FAILURE:
            return {
                ...state,
                loading: false,
                error: false,
                loadMoreLoading: false,
                loadMoreError:true
            }
        default: return state
    }
}
