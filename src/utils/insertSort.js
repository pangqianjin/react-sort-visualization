export default function* insertSort(oldArr){
    const arr = [...oldArr]
    let preIndex, current;// 当前元素之前的下标， 当前元素
    for(let i=1; i<arr.length; i++){
        preIndex = i - 1;
        current = arr[i];
        // 当前元素向前找第一个比自己小的元素，然后插在它的后面的合适位置
        while(preIndex>=0 && arr[preIndex]>current){
            // 当前元素到这个第一个比自己小的元素之间的元素全部向后移动一个位置，向后挤一挤
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;// 找到合适位置后,当前元素直接到它的后面
        yield arr
    }
}