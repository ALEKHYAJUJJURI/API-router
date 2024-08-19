
import { useState } from "react"
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom"

export function HandleLogin(){
    const [useName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [cookie,setCookie,removeCookie] = useCookies(['userName'])
    const [cookiePw,setCookiePw,removeCookiePw] = useCookies(['password'])
    let navigator = useNavigate()
    function handleName(e){
        setUserName(e.target.value)
        console.log(e.target.value)
    }
    function handlepassword(e){
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    function handleSubmit(){
        setCookie('userName',useName)
        setCookiePw('password',password)
        
        if(cookie['userName']){
            navigator('/categories')
        }
        else{
            navigator('/error')
        }
        
    }
    return(
        <div>
            <h2>Login Page</h2>
            <form className="m-2">
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" required onChange={handleName} /></dd>
                <dt>Password</dt>
                <dd><input type="password" required onChange={handlepassword}/></dd>
            </dl>
           <div>
           <button className="btn btn-light" onClick={handleSubmit}>Login</button>
           <Link to="/" className="mx-2 btn btn-light">Back to Home</Link>
           </div>
            </form>
            
        </div>
    )
}