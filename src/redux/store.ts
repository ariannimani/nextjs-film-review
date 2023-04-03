import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { genresReducer, trailersReducer } from "@/redux/slices";

export const store = configureStore({
  reducer: {
    genres: genresReducer,
    trailers: trailersReducer,
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
