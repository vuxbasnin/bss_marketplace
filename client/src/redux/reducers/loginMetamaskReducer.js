import { INIT_STATE } from '../../constant';
import { getType } from '../actions';
import { loginMetamask } from '../actions/loginMetamask';

export default function loginMetamaskReducer(
    state = INIT_STATE.loginMetaMask,
    action
) {
    switch (action.type) {
        case getType(loginMetamask.loginMetamaskRequest()):
            return {
                ...state,
                loading: true,
            };
        case getType(loginMetamask.loginMetamaskSuccess()):
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case getType(loginMetamask.loginMetamaskFailure()):
            return {
                ...state,
                loading: false,
            };
        default:
            break;
    }
}
