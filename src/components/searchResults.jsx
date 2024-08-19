import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams,Link } from "react-router-dom";


export function SearchRes(){
  let [useSearch] = useSearchParams()
  const[prod,setProd] = useState([])
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/category/${useSearch.get('search')}`) 
    .then(res=>{
        console.log(res.data)
        setProd(res.data)
    })
    
  },[])
  console.log(useSearch.get('search'))
    return(
        <div >
            <Link to="/search">Back to Search</Link>
            <h4> Searching for {useSearch.get('search').toUpperCase()} products</h4>
            <div className="d-flex flex-wrap">
            {
            prod.map(item=>
                
                    <div className="w-25 p-2 m-2 bg-light text-dark rounded d-flex flex-column justify-content-center align-items-center" key={item.id}>
                        
                        <p>{item.title}</p>
                        <img src={item.image} width={90}/>
                    
                        <p className="bi h5 bi-currency-dollar">{item.price}</p>
                        </div>
                   
            )
          }
          
            </div>
          
        </div>
    )
}