import { connect, useDispatch } from "react-redux";
import { Movie, moviesLoaded } from "../../reducers/movies";
import { RootState } from "../../store";
import MoviesCard from "./MoviesCard";
import styles from "./Movies.module.scss";
import { useEffect } from "react";
import { client } from "../../api/tmdb";

interface MoviesProps {
  movies: Movie[];
}

function Movies({ movies }: MoviesProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadData() {
      const config = await client.getConfiguration();
      const imageUrl = config.images.base_url;
      const results = await client.getNowPlaying();
      const mappedResults: Movie[] = results.map((m) => ({
        id: m.id,
        title: m.title,
        popularity: m.popularity,
        overview: m.overview,
        image: m.backdrop_path
          ? `${imageUrl}w780${m.backdrop_path}`
          : undefined,
      }));
      dispatch(moviesLoaded(mappedResults));
    }
    loadData();
  }, [dispatch]);
  return (
    <section>
      <div className={styles.list}>
        {movies.map((movie) => (
          <MoviesCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            popularity={movie.popularity}
            overview={movie.overview}
            image={movie.image}
          />
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({ movies: state.movies.top });

const connector = connect(mapStateToProps);

export default connector(Movies);
