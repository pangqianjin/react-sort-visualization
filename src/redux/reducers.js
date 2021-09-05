import initialState from "./state"
import {
    UPDATE_ARR, BUBBLE_SORT, SELECT_SORT,
    INSERT_SORT, SHALL_SORT, MERGE_SORT, QUICK_SORT, UPDATE_DELAY
} from "./actions"
import {combineReducers} from 'redux'


// arrReducer: array
const arrReducer = (arr = initialState.arr, action) => {
    switch (action.type) {
        case UPDATE_ARR:
            return [...action.data]
        default:
            return arr
    }
}

// delayReducer: number
const delayReducer = (delay=initialState.delay, action)=>{
    switch(action.type){
        case UPDATE_DELAY:
            return action.data
        default:
            return delay
    }
}

// algorithmReducer: string
const algorithmReducer = (algorithm = initialState.algorithm, action) => {
    switch (action.type) {
        case BUBBLE_SORT:
        case SELECT_SORT:
        case INSERT_SORT:
        case SHALL_SORT:
        case MERGE_SORT:
        case QUICK_SORT:
            return action.data
        default:
            return algorithm
    }
}

export default combineReducers({
    arr: arrReducer,
    delay: delayReducer,
    algorithm: algorithmReducer
})