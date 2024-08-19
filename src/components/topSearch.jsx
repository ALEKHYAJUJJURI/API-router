import axios from "axios"
import { useEffect,useState } from "react"
import { useSearchParams } from "react-router-dom"

export function TopSearch(){
    let [searchParams] = useSearchParams()
    console.log([searchParams]) 
    const[products,setProducts] = useState([])
 
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${searchParams.get('search')}`) 
        .then(res=>{
            console.log(res.data)
            setProducts(res.data)
        })
        
      },[])
    console.log(searchParams.get('search'))

    return(
        <div>
            <h3>Top Results</h3>
       <div className="d-flex flex-wrap">
       {
            products.filter(prod=>prod.rating.rate>4.0).map(im=>
                <div key={im.id} className="w-50 p-3">
                    <p>{im.title}</p>
                    <img src={im.image} width={80}/>
                    <p className="bi bi-currency-dollar">{im.price}</p>
                    <p>{im.rating.rate}</p>
                 </div>   
            )
        }
       </div>
        </div>
    )
}