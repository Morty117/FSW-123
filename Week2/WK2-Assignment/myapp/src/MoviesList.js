import Movies from './Movies'

function MoviesList({movies}){
    const movieList = movies.map((movie) => {
            return(
                <Movies 
                    key={movie.id}
                    title={movie.title}
                    subTitle={movie.subTitle}
                    info={movie.info}
                />
            )
        }
    )

    return(
        <>
            {movieList}
        </>
    )
}

export default MoviesList