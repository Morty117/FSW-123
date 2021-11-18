import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Post from './Post'

function Posts(){
    let { path, url } = useRouteMatch()

    return (
        <>
            <h3>Posts</h3>
            <ul>
                <li><Link to={`${url}/post1`}>Post 1</Link></li>
                <li><Link to={`${url}/post2`}>Post 2</Link></li>
                <li><Link to={`${url}/post3`}>Post 3</Link></li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h3>Select a blog post</h3>
                </Route>
                <Route path={`${path}/:postId`}>
                    <Post />
                </Route>
            </Switch>
        </>
    )
}

export default Posts