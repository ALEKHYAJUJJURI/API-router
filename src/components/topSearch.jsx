import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

export function TopSearch(){
    let [params] = useSearchParams()
const[prod,setProd] = useState([])
useEffect(()=>{
    console.log(params.get('search'))
    axios.get(`https://fakestoreapi.com/products/category/${params.get('search')}`)
    .then(res=>{
        console.log(res.data)
        setProd(res.data)
    })
},[])
    return(
        <div>
            <h2>Top Results</h2>
       <div className="d-flex flex-wrap">
       {
            prod.filter(item=>item.rating.rate>4.0).map(detail=>
                <div key={detail.id} className="w-25 p-4">
                        
                            <img src={detail.image} width={80} className="my-1"/>
                        <p className="h6 bi bi-currency-dollar">{detail.price}</p>
                        <p>{detail.rating.rate}</p>
                </div>    
            )
        }
        <Link to="/search">Back to search</Link>
       </div>
        </div>
    )
}