import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import structuredSelector from './redux/selector';
import useCounter from './hooks/useCounter';
import { parseData } from './utils';
import "./styles/Counter.scss"

/**
 * Counter description
 */
const Counter = ({ children }) => {
  const scoreSliceData = useSelector(structuredSelector) 
  const {increment, decrement} = useCounter(scoreSliceData.scoreData)
  return (
    <div className='Counter-wrapper'>
      <h2>score: {parseData(scoreSliceData.scoreData)}</h2>
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
