import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCard, TPhotoState } from '../../types';

// Define the initial state using that type
const initialState: TPhotoState = {
  photos: []
};

export const photosSlice = createSlice({
  name: 'photos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchAll: (state, action: PayloadAction<TCard[]>) => {
      state.photos = action.payload;
    }
  }
});

export const { fetchAll } = photosSlice.actions;

export default photosSlice.reducer;
