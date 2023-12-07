import { INIT_STATE } from '../../constant';
import { getType } from '../actions';
import { showModal, hideModal } from '../actions/modal';

export default function ModalReducer(state = INIT_STATE.modal, action) {
    switch (action.type) {
        case getType(showModal()):
            return {
                isShow: true,
            };
        case getType(hideModal()):
            return {
                isShow: false,
            };
        default:
            return state;
    }
}
