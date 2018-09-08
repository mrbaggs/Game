import {combineReducers} from 'redux';
import rooms from './rooms';
import currentRoom from './currentRoom';

export default combineReducers({
    rooms,
    currentRoom
})