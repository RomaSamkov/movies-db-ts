import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";

type MovieCardProps = {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  image?: string;
};

function MoviesCard({
  id,
  title,
  popularity,
  overview,
  image = "/public/movie-thumb.png",
}: MovieCardProps) {
  return (
    <div className={styles.card}>
      <img className={styles.thumbnail} src={image} alt="Movie thumbnail" />
      <div>
        <Link to={`/movies/${id}`}>{title}</Link>
      </div>
      <div>{popularity}</div>
      <div>{overview}</div>
    </div>
  );
}

export default MoviesCard;
