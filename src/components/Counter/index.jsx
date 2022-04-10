import React from 'react'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import "./styles/Counter.scss"
import structuredSelector from './redux/selector';
import useCounter from './hooks/useCounter';

/**
 * Counter description
 */
const Counter = ({ children }) => {
  const counterSliceData = useSelector(structuredSelector) 
  const {increment, decrement} = useCounter(counterSliceData.counterData)
  return (
    <div className='counter-wrapper'>
      <h2>Counter: {counterSliceData.counterData}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      {children}
    </div>
  )
}

Counter.propTypes = {
  children: PropTypes.any
}

export default Counter
