import { NavLink, useLocation } from 'react-router-dom'
import css from './MovieCard.module.css'

export default function MovieCard({movie}) {

  const defaultImg = '<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>'



    return(
            <div className={css.container}>
              <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`: defaultImg} width={350} alt="poster"/>
              <div>
                <div>
                  <h1 className={css.title} >{`${movie.title} (${movie.release_date.slice(0,4)})`}</h1>
                  <p className={css.text}>User score: {(movie.vote_average * 10).toFixed() + "%"}</p>
                  <h2 className={css.title} >Overview</h2>
                  <p className={css.text}>{movie.overview}</p>
                  <h2 className={css.title} >Genres</h2>
                  <ul>
                    {movie.genres.map(genre => (<li key={genre.id} className={css.text}>{genre.name}</li>))}
                  </ul>
              </div>

              <div>
                <h2 className={css.title} >Additional information</h2>
                <ul className={css.information}>
                  <li>
                    <NavLink className={css.link} to='cast'>MovieCast</NavLink>
                  </li>
                  <li>
                    <NavLink className={css.link} to='reviews'>MovieReviews</NavLink>
                  </li>
                </ul>
              </div>
              

              </div>   
  
            </div>
            
            )
}