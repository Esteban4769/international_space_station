import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getISSPosition } from '../api/spaceInfo';
import { ISSPosition } from '../types/ISSPosition';

interface PositionState {
  data: ISSPosition | null,
  loading: boolean,
  error: string,
}

const initialState: PositionState = {
  data: null,
  loading: false,
  error: '',
};

export const fetchData = createAsyncThunk('position/fetch', () => {
  return getISSPosition();
});

const positionSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {
    clear: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchData.rejected, (state) => {
      state.loading = false;
      state.error = 'Error';
    });
  },
});

export default positionSlice.reducer;
export const { clear } = positionSlice.actions;
