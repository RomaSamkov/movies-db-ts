import { Action, Reducer } from "redux";

export interface Movie {
  id: number;
  title: string;
  popularity: number;
  overview: string;
}
interface MoviesState {
  top: Movie[];
}

const initialState: MoviesState = {
  top: [
    { id: 1, title: "Inception", popularity: 98, overview: "Dreams..." },
    { id: 2, title: "MIB", popularity: 108, overview: "Space..." },
    { id: 3, title: "MIB2", popularity: 111, overview: "MIB2..." },
    { id: 4, title: "Cars", popularity: 88, overview: "Cars..." },
  ],
};

const moviesReducer: Reducer<MoviesState, Action> = (state, action) => {
  return initialState;
};

export default moviesReducer;
