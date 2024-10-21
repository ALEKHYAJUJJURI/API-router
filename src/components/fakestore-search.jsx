import { useState } from "react";
import { Link } from "react-router-dom";

export function HandleSearch(){
    const [input,setInput] = useState('')
    function HandleSearch(e){
            setInput(e.target.value)
    }
    return(
        <div>
            <h3>Search Method</h3>
            <form className="input-group w-25" action="/searchRes">
            <input type="text" name="search" className="form-control" onChange={HandleSearch}/>
            <button formAction="/searchRes" className="bi bi-search btn btn-primary"></button>
            <button formAction="/topSearch" className="bi bi-search-heart btn btn-warning"></button>
            </form>
            <p>Searching for....{input}</p>
            <Link to="/">Back to Home</Link>
        </div>
    )
}