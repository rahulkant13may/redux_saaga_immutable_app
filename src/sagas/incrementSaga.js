import {put, takeEvery, delay} from 'redux-saga/effects';

function* incrementAsync() {
    yield delay(1000);
    yield put({type:'ASYNC_AGE_INCREMENT', value: 1})
    
}

export function* watchIncrementAsync() {
    yield takeEvery('AGE_UP', incrementAsync )
    
}