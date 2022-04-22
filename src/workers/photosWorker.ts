import { call, put } from 'redux-saga/effects';
import { fetchAllSuccess } from '../redux/slices/photoSlice';
import { TPhoto } from '../types';
import { getPhotos } from '../utils/api';

export function* fetchAllPhotosWorker() {
  try {
    const photos: TPhoto[] = yield call(getPhotos);
    yield put(fetchAllSuccess(photos));
  } catch (error) {
    console.log(error);
  }
}
