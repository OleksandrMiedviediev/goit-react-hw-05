import { NavLink, useLocation } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";
import css from "./MovieList.module.css";
 

 
export default function MovieList({ movies }) {

    const location = useLocation();

    return (
        <ul className={css.container}>
            {movies.map((movie) => (<li key={movie.id}>
                <NavLink className={css.link} to={`/movies/${movie.id}`} state={location}>
                    <MovieItem movie={movie}/>
                </NavLink>
                </li>))}
        </ul>
        
    )
}