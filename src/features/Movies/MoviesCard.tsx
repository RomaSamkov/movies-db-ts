import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";

type MovieCardProps = {
  id: number;
  title: string;
  popularity: number;
  overview: string;
};

function MoviesCard({ id, title, popularity, overview }: MovieCardProps) {
  return (
    <div className={styles.card}>
      <img
        className={styles.thumbnail}
        src="/public/movie-thumb.png"
        alt="Movie thumbnail"
      />
      <div>
        <Link to={`/movies/${id}`}>{title}</Link>
      </div>
      <div>{popularity}</div>
      <div>{overview}</div>
    </div>
  );
}

export default MoviesCard;
