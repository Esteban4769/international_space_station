import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import peopleReducer from '../features/people';
import positionReducer from '../features/position';

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    position: positionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
