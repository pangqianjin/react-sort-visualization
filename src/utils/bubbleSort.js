export default function* bubbleSort(oldArr) {
    let tmp;
    const arr = [...oldArr]
    for (let i = arr.length; i > 0; i--) {// 较大的arr[j]会冒泡到arr的尾部
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {// 前一个元素比或一个大，则向后冒泡(交换)
          tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
          yield arr
        }
      }
    }
  }