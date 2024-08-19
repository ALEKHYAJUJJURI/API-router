import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, Outlet, useNavigate } from "react-router-dom";


export function HandeCategories(){
    const [categories,setCategories] = useState([]);
    const [cookies,setCookies,removeCookies] = useCookies(['userName'])
    let navigate = useNavigate()
    useEffect(()=>{
       if(cookies['userName']){
        axios.get('https://fakestoreapi.com/products/categories')
        .then(res=>{
            console.log(res.data)
            setCategories(res.data)
        })
       
       }
       else{
        navigate('/login')
    }
    },[])
    return(
        <div style={{height:'100%'}}>
            <h3>Categories</h3>
           
              <div className="row">
              <div className="col-5">
            
                <ol className="list-unstyled d-flex flex-column w-25 mx-3">
                    {
                        categories.map(item=>
                            <li key={item} className="my-2 btn btn-secondary"><Link className=" text-light text-decoration-none" to={`products/${item}`}>{item.toUpperCase()}</Link></li>
                        )
                    }
                </ol>
                <Link to="/home">Back to home</Link>
                </div>
                <div className="col-7">
                    
                    <Outlet/>
                </div>

              </div>
           
           
        </div>
        
    )
}