import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';
import { loginMetamask } from '../actions/loginMetamask';

function* fetchDemoSaga(action) {
    try {
        const demo = yield call(api.fetchDemo);
        console.log('sagas => fetchDemoSaga => ', demo);
        yield put(actions.getDemo.getDemoSuccess(demo.data));
    } catch (error) {
        yield put(actions.getDemo.getDemoFailure(error));
    }
}

function* loginMetamaskSaga() {
    try {
        if (!window.ethereum) throw new Error("Metamask not installed!")
        const accounts = yield call(window.ethereum.request, { method: 'eth_requestAccounts' })
        const address = accounts[0]
        const balance = yield call(window.ethereum.request, { method: 'eth_getBalance', params: [address, "latest"] })
        yield put(loginMetamask.loginMetamaskSuccess(data(address, balance)))
    } catch (error) {
        yield put(loginMetamask.loginMetamaskFailure(error.message))
    }
}

function* mySaga() {
    yield takeLatest(actions.getDemo.getDemoRequest, fetchDemoSaga);
    yield takeLatest(loginMetamask.loginMetamaskRequest, loginMetamaskSaga);
}

//generator function like async await

export default mySaga;
