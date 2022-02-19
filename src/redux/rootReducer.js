import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/categoriesReducer";
import { catReducer } from './cats/catReducer';

const rootReducer = combineReducers({
    categoriesData:categoriesReducer,
    catsData:catReducer
});

export default rootReducer