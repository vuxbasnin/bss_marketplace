import { INIT_STATE } from '../../constant';
import { getType } from '../actions';
import { loginMetamask } from '../actions/loginMetamask';

export default function LoginMetamaskReducer(
    state = INIT_STATE.loginMetamask,
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
            return {
                ...state
            }
    }
}
