import { Link } from "react-router-dom";

export function HandleHome(){
    return(
        <div>
             <h3 className='bi bi-cart'>Shop<Link to="/categories">Categories</Link></h3>
        </div>
    )
}