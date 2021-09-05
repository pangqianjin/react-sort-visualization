// 排序算法类型
import { BUBBLE_SORT, SELECT_SORT, INSERT_SORT, MERGE_SORT, SHALL_SORT, QUICK_SORT } from "../redux/actions"
import bubbleSort from "./bubbleSort"
import insertSort from "./insertSort"
// import mergeSort from "./mergeSort"
import selectSort from "./selectSort"
import shallSort from "./shallSort"
// import {quickSort1, quickSort2} from './quickSort'

const sortTypesFunc = {
    [BUBBLE_SORT]: bubbleSort,
    [SELECT_SORT]: selectSort,
    [INSERT_SORT]:　insertSort,
    // [MERGE_SORT]: mergeSort,
    [SHALL_SORT]: shallSort,
    // [QUICK_SORT]: quickSort1
}

export default sortTypesFunc