import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";
import { Typography } from "@mui/material";

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
      <Typography variant="h5" gutterBottom>
        <div>
          <Link to={`/movies/${id}`}>{title}</Link>
        </div>
      </Typography>
      <div>{popularity}</div>
      <div>{overview}</div>
      <div>
        <Link to={`/movies/${id}`}>Details</Link>
      </div>
    </div>
  );
}

export default MoviesCard;
