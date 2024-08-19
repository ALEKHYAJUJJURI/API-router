import axios from "axios"
import { useEffect, useState } from "react"
import { useParams,Link } from "react-router-dom"


export function HandleProducts(){
    let params = useParams()
    console.log(params) 
    const[products,setProducts] = useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.item}`)
        .then(res=>{
            console.log(res.data)
            setProducts(res.data)
        })
    },[])
    return(
        <div className="">
             <h3>{params.item.toUpperCase()}Products</h3>
            <div  className="d-flex flex-wrap">
            {
                products.map(itm=>

    
                    <div key={itm.id} className=" m-2 w-25" >
                         <dl>
                          
                           <dd><img src={itm.image} width={40}/></dd>
                           <dd className="">{itm.price}</dd>
                                    <dt className="btn btn-warning"><Link to={`/preview/${itm.id}`}  className="bi bi-eye"></Link></dt>
                                    <dt>{itm.rating.rate}<span className="bi bi-star-fill text-success mx-1"></span><span>{`[${itm.rating.count}]`}</span></dt>
                        </dl>
                       
                        </div> 
                  
                )
            }
              </div>
        </div>
    )
}