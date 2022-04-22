import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { photosWatcher } from '../sagas/photosSaga';
import photosReducer from './slices/photoSlice';

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    photos: photosReducer
  },
  middleware: [saga]
});
saga.run(photosWatcher);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
