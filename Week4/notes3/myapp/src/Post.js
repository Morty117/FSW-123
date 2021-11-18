import { useParams } from "react-router-dom";

function Post() {
    let { postId } = useParams()
    return(
        <div>
            <h3>{postId}</h3>
        </div>
    )
}

export default Post