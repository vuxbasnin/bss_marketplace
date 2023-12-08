import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchDemoSaga(action) {
    try {
        const demo = yield call(api.fetchDemo);
        console.log('sagas => fetchDemoSaga => ', demo);
        yield put(actions.getDemo.getDemoSuccess(demo.data));
    } catch (error) {
        yield put(actions.getDemo.getDemoFailure(error));
    }
}

function* mySaga() {
    yield takeLatest(actions.getDemo.getDemoRequest, fetchDemoSaga);
}

//generator function like async await

export default mySaga;
