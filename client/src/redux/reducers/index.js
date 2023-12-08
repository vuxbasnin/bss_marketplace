import { combineReducers } from 'redux';
import ModalReducer from './ModalReducer';
import loginMetamaskReducer from './loginMetamaskReducer';

export default combineReducers({
    modal: ModalReducer,
    loginMetamask: loginMetamaskReducer
});
