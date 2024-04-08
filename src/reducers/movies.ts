import { Action, Reducer } from "redux";

export interface Movie {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  image?: string;
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

export const moviesLoaded = (movies: Movie[]) => ({
  type: "movies/loaded",
  payload: movies,
});

interface ActionWithPayload<T> extends Action {
  payload: T;
}

const moviesReducer: Reducer<MoviesState, ActionWithPayload<Movie[]>> = (
  state,
  action
) => {
  const currentState = state ?? initialState;
  switch (action.type) {
    case "movies/loaded":
      return { ...currentState, top: action.payload };

    default:
      return currentState;
  }
};

export default moviesReducer;
