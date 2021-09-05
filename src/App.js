import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateArrAction, updateAlgorithmAction, updateDelayAction, BUBBLE_SORT, INSERT_SORT, SELECT_SORT, SHALL_SORT, MERGE_SORT, QUICK_SORT } from './redux/actions';
import initialState from './redux/state';
import './App.css';
import sortTypesFunc from './utils';


class App extends Component {
  state = {
    newArr: [...this.props.arr]
  }

  componentDidUpdate() {
    if (!this.state.newArr) {
      clearInterval(this.timer)
    }
  }

  startSort = () => {
    const { arr, updateArr, delay, algorithm } = this.props
    const arrGen = sortTypesFunc[algorithm](arr)

    this.timer = setInterval(() => {
      if (this.state.newArr) {
        updateArr(this.state.newArr)
        this.setState({ newArr: arrGen.next().value })
      }
    }, delay)
  }

  resetSort = () => {
    this.props.updateArr(initialState.arr)
    this.setState({ newArr: initialState.arr })
  }

  render() {
    const { updateDelay, updateAlgorithm } = this.props
    const whiteText = { color: 'white', margin: '0.5rem' }

    return (
      <div className="App">
        <button onClick={this.startSort}>▶</button>
        <button onClick={this.resetSort}>reset</button>

        <span style={whiteText}>速度:</span>
        <select defaultValue='1.0' onChange={(op) => updateDelay(parseInt(op.target.value))}>
          <option value='1200'>1.0x</option>
          <option value='800'>1.5x</option>
          <option value='600'>2.0x</option>
          <option value='480'>2.5x</option>
          <option value='400'>3.0x</option>
        </select>

        <span style={whiteText}>当前排序算法：</span>
        <select defaultValue={BUBBLE_SORT} onChange={(op) => updateAlgorithm(op.target.value)}>
          <option value={BUBBLE_SORT}>冒泡排序</option>
          <option value={INSERT_SORT}>插入排序</option>
          <option value={SELECT_SORT}>选择排序</option>
          <option value={SHALL_SORT}>希尔排序</option>
          {/* <option value={MERGE_SORT}>归并排序</option> */}
          {/* <option value={QUICK_SORT}>快速排序</option> */}
        </select>

        <span style={{...whiteText, position: 'absolute', top: '2rem', left: '0.5rem'}}>
          {!this.state.newArr? '排序完成！': ''}
        </span>
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
  state => ({
    delay: state.delay,
    arr: state.arr,
    algorithm: state.algorithm
  }),
  {
    updateArr: updateArrAction,
    updateDelay: updateDelayAction,
    updateAlgorithm: updateAlgorithmAction
  }
)(App)
