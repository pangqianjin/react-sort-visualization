export default function* shallSort(oldArr){
    const arr = [...oldArr]
    // 增量每次/2且向下取整
    for(let step=Math.floor(arr.length/2); step>0; step=Math.floor(step/2)){
        // 从增量那一组开始进行插入排序，直至完毕
        for(let i=step; i<arr.length; i++){
            let j = i;
            let current = arr[i];
            // preIndex-step是与它同组的其它元素
            while(j-step>=0 && arr[j-step]>current){
                arr[j] = arr[j-step];
                j -= step;
                yield arr
            }
            arr[j] = current;
            yield arr
        }
    }
}