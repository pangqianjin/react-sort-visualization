import { BUBBLE_SORT } from "./actions"

// initialState
const initialState = {
    arr: [1, 3, 8, 2, 6, 10, 7, 5, 9, 4],
    delay: 1200,// 延迟毫秒数
    algorithm: BUBBLE_SORT// 当前使用的排序算法，默认用冒泡排序
}

export default initialState