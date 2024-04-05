import { connect } from "react-redux";
import { Movie } from "../../reducers/movies";
import { RootState } from "../../store";
import MoviesCard from "./MoviesCard";
import "./Movies.css";

interface MoviesProps {
  movies: Movie[];
}

// eslint-disable-next-line react-refresh/only-export-components
function Movies({ movies }: MoviesProps) {
  return (
    <section>
      <div className="Movies-list">
        {movies.map((movie) => (
          <MoviesCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            popularity={movie.popularity}
            overview={movie.overview}
          />
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({ movies: state.movies.top });

const connector = connect(mapStateToProps);

// eslint-disable-next-line react-refresh/only-export-components
export default connector(Movies);
