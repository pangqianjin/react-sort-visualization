import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateArrAsync, updateArr, updateAlgorithm } from './redux/actions';
import initialState from './redux/state';
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


class App extends Component {
  componentDidMount(){
    this.props.updateArr(initialState.arr)  
  }

  startSort = () => {
    const { arr } = this.props
    const processArr = []// 排序结果的中间数组
    const arrGen = bubbleSort(arr)
    let newArr = [...arr]
    while (newArr) {
      processArr.push(newArr)
      newArr = arrGen.next().value
    }
    processArr.forEach(array=>this.props.updateArrAsync(array, 1000))
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <button onClick={this.startSort}>▶</button>
        <button onClick={()=>this.props.updateArr(initialState.arr)}>reset</button>
        {
          this.props.arr.map((item, index) => (
            <div className='cylinder' style={{ top: `${20 - item}rem`, height: `${item}rem` }} key={index}>
              {item}
            </div>
          ))
        }
      </div>
    )
  }
}

export default connect(
  state=>({
    arr: state.arr,
    algorithm: state.algorithm
  }),
  {
    updateArrAsync,
    updateArr,
    updateAlgorithm
  }
)(App)
