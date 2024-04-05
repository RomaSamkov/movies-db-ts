import { Link } from "react-router-dom";

type MovieCardProps = {
  id: number;
  title: string;
  popularity: number;
  overview: string;
};

function MoviesCard({ id, title, popularity, overview }: MovieCardProps) {
  return (
    <div className="Movies-card">
      <Link to={`/movies/${id}`}>{title}</Link>
      <div>{popularity}</div>
      <div>{overview}</div>
    </div>
  );
}

export default MoviesCard;
