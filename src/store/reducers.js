import { combineReducers } from 'redux';
import { name as counter, reducer as counterReducer } from '../components/Counter/redux/slice';

const createRootReducer = () => {
    return combineReducers({
        [counter]: counterReducer,
    })
}

export default createRootReducer