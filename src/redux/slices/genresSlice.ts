import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import { Genre } from "@/pages";

// declaring the types for our state
export type GenresState = {
  genres: Genre[];
};

const initialState: GenresState = {
  genres: [],
};

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    setGenres: (state, action: PayloadAction<Genre[]>) => {
      state.genres = action.payload;
    },
  },
});

export const { setGenres } = genresSlice.actions;

export const selectGenres = (state: RootState) => state.genres.genres;

export default genresSlice.reducer;
