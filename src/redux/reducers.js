import initialState from "./state"
import {
    UPDATE_ARR, BUBBLE_SORT, SELECT_SORT,
    INSERT_SORT, SHALL_SORT, MERGE_SORT, QUICK_SORT
} from "./actions"
import {combineReducers} from 'redux'


// arrReducer
const arrReducer = (arr = initialState.arr, action) => {
    switch (action.type) {
        case UPDATE_ARR:
            return [...arr]
        default:
            return [...arr]
    }
}

// algorithmReducer
const algorithmReducer = (algorithm = initialState.algorithm, action) => {
    switch (action.type) {
        case BUBBLE_SORT:
            return BUBBLE_SORT
        case SELECT_SORT:
            return SELECT_SORT
        case INSERT_SORT:
            return INSERT_SORT
        case SHALL_SORT:
            return SHALL_SORT
        case MERGE_SORT:
            return MERGE_SORT
        case QUICK_SORT:
            return QUICK_SORT
        default:
            return algorithm.concat('')
    }
}

export default combineReducers({
    arr: arrReducer,
    algorithm: algorithmReducer
})