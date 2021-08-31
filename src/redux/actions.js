// 更新数组type
export const UPDATE_ARR = 'UPDATE_ARR'
// 更新数组的action
export const updateArr = (arr)=>({type: UPDATE_ARR, data: arr})
export const updateArrAsync = (arr, delay) => dispatch => setTimeout(()=>dispatch(updateArr(arr)), delay)
    


// 排序算法type
export const BUBBLE_SORT = 'BUBBLE_SORT'// 冒泡排序
export const SELECT_SORT = 'SELECT_SORT'// 选择排序
export const INSERT_SORT = 'INSERT_SORT'// 插入排序
export const SHALL_SORT = 'SHALL_SORT'// 希尔排序
export const MERGE_SORT = 'MERGE_SORT'// 归并排序
export const QUICK_SORT = 'QUICK_SORT'// 快速排序
// 排序算法的action
export const updateAlgorithm = (algorithm)=>({type: algorithm, data: algorithm})
