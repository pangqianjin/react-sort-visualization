import React, { Component } from 'react'
import './App.css';

function* bubbleSort(arr) {
  let tmp;
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

export default class App extends Component {
  state = {
    arr: [1, 3, 5, 2, 6, 10, 7, 5, 9],
    delay: 1// second
  }

  startSort = () => {
    const { arr } = this.state
    const arrGen = bubbleSort(arr)
    let newArr = [...arr]
    while (newArr) {
      this.setState({arr: newArr})
      newArr = arrGen.next().value
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.startSort}>▶</button>
        {
          this.state.arr.map((item, index) => (
            <div className='cylinder' style={{ top: `${20 - item}rem`, height: `${item}rem` }} key={index}>
              {item}
            </div>
          ))
        }
      </div>
    )
  }
}
