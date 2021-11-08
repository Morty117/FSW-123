import './movies.css'

function Movies({key, title, subTitle, info}){
    const divStyle = {
        backgroundColor: 'red',
        width: '300px'
    }

    return(
        <div key={key}
            className='movie-container'
            style={divStyle}
        >
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <p>{info}</p>
        </div>
    )
}

export default Movies