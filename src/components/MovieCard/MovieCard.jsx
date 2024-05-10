import css from './MovieCard.module.css'

export default function MovieCard({movie}) {
    return(
            <div className={css.container}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.overview} width={350} />
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
              </div>
              

              </div>   
  
            </div>
            )
}