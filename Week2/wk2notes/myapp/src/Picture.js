// function Picture(props){

//     // {props.children} is anything that going to be inside the invocation of the component(being passed in, special properties)
//     return(
//         <div>
//             <img src={props.src} alt="Kitten" />
//              {props.children}
//         </div>
//     )
// }

// export default Picture

import './Picture.css'

function Picture({key, src, alt, desc, location}){

    const myStyle = {
        color: 'red'
    }

    return(
        <div key={key}
            className='container'
            style={
                {
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '310px'
                }
            }
        >
            <img src={src} alt={alt}/>
            <h4 style={myStyle}>{desc}</h4>
            <h5>I live in {location}</h5>
        </div>
    )
}

export default Picture