import { NavLink } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
    return (
        <ul className={css.container}>
            {movies.map((movie) => (<li key={movie.id}>
                <NavLink className={css.link} to={`/movies/${movie.id}`}>
                    <MovieItem movie={movie}/>
                </NavLink>
                </li>))}
        </ul>
        
    )
}