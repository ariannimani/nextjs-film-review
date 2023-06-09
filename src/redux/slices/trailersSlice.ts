import { VideoProps } from "@/types/movies/CommonTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RootTrailer {
  trailers: TrailersState;
}
interface Trailer {}
// declaring the types for our state
export type TrailersState = {
  trailers: VideoProps[];
};

const initialState: TrailersState = {
  trailers: [],
};

export const trailersSlice = createSlice({
  name: "Trailers",
  initialState,
  reducers: {
    setTrailers: (state, action: PayloadAction<VideoProps>) => {
      state.trailers = [...state.trailers, action.payload];
    },
  },
});

export const { setTrailers } = trailersSlice.actions;

export const selectTrailers = (state: RootTrailer) =>
  state.trailers.trailers.slice(0, 5);

export default trailersSlice.reducer;
