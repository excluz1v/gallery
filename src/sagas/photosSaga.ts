import { takeEvery } from 'redux-saga/effects';
import { fetchAllPhotosWorker } from '../workers/photosWorker';

export function* photosWatcher() {
  yield takeEvery('photos/fetchAllPhotos', fetchAllPhotosWorker);
}
