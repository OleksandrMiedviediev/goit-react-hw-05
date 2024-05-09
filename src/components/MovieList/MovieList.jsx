

export default function MovieList({ movies }) {
    console.log(movies.id)
    return (
        <ul>
            {movies.map(movie => (<li key={movie.id}></li>))}
        </ul>
        
    )
}