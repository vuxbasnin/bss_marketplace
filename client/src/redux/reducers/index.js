import { combineReducers } from 'redux';
import ModalReducer from './ModalReducer';
import LoginMetamaskReducer from './LoginMetamaskReducer';

export default combineReducers({
    modal: ModalReducer,
    loginMetamask: LoginMetamaskReducer,
});