export function quickSort1(arr, low, high){
    let i = low, j = high, tmp;
    if(i<j){
        tmp = arr[i];// 选取arr[i]作为基准数
        while(i!==j){
            while(i<j && arr[j]>tmp) j--;
            arr[i] = arr[j];
            while(i<j && arr[i]<tmp) i++;
            arr[j] = arr[i];
        }
        arr[i] = tmp;// 至此，基准数arr[i]冒泡完成
        quickSort1(arr, low, i-1);// arr[i]的左侧快排
        quickSort1(arr, i+1, high);// arr[i]的右侧快排
    }
}

export function quickSort2(arr){
    if(arr.length===0) return arr;
    const pivot = arr.pop();// 使用最后一个元素当作基准数
    const left = [], right = [];
    for(let i=0; i<arr.length;i++){
        if(arr[i]<pivot)
            left.push(arr[i]);// 小于基准数则放到left
        else
            right.push(arr[i]);// 大于基准数则放到right
    }
    // 合并left的快排结果，基准数和右侧的快排结果
    return quickSort2(left).concat(pivot, quickSort2(right));
}