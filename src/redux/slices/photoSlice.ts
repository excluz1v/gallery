import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCard, TPhotoState } from '../../types';

// Define the initial state using that type
const initialState: TPhotoState = {
  photos: [],
  isLoading: false,
  currentPage: 1,
  error: ''
};

export const photosSlice = createSlice({
  name: 'photos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchAllPhotos: (state) => {
      state.isLoading = true;
    },
    fetchAllSuccess: (state, action: PayloadAction<TCard[]>) => {
      state.photos = action.payload;
      state.isLoading = false;
    },
    fetchAllError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const { fetchAllPhotos, fetchAllSuccess, fetchAllError } = photosSlice.actions;

export default photosSlice.reducer;
