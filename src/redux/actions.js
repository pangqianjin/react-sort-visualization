// 更新数组type
export const UPDATE_ARR = 'UPDATE_ARR'
export const updateArrAction = (arr)=>({type: UPDATE_ARR, data: arr})


// 更新排序的延迟
export const UPDATE_DELAY = 'UPDATE_DELAY'
export const updateDelayAction = (delay)=>({type: UPDATE_DELAY, data: delay})


// 排序算法type
export const BUBBLE_SORT = 'BUBBLE_SORT'// 冒泡排序
export const SELECT_SORT = 'SELECT_SORT'// 选择排序
export const INSERT_SORT = 'INSERT_SORT'// 插入排序
export const SHALL_SORT = 'SHALL_SORT'// 希尔排序
export const MERGE_SORT = 'MERGE_SORT'// 归并排序
export const QUICK_SORT = 'QUICK_SORT'// 快速排序
export const updateAlgorithmAction = (algorithm)=>({type: algorithm, data: algorithm})
