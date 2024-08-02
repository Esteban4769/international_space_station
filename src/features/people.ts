import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPeople } from '../api/spaceInfo';
import { People } from '../types/People';

interface PeopleState {
  data: People[] | null,
  loading: boolean,
  error: string,
}

const initialState: PeopleState = {
  data: null,
  loading: false,
  error: '',
};

export const fetchData = createAsyncThunk('people/fetch', () => {
  return getPeople();
});

const peopleSlice = createSlice({
  name: 'people',
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
      state.data = action.payload
        .people.filter(({ craft }) => craft === 'ISS');
      state.loading = false;
    });

    builder.addCase(fetchData.rejected, (state) => {
      state.loading = false;
      state.error = 'Error';
    });
  },
});

export default peopleSlice.reducer;
export const { clear } = peopleSlice.actions;
