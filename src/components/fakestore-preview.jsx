import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export function HandlePreview(){
    let param = useParams()
    console.log(param)
    
    const [preview,setPreview] = useState([{id:0,title:'',category:'',description:'',price:'',rating:{rate:"",count:''},image:''}])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${param.id}`)
        .then(res=>{
            console.log(res.data)
            setPreview(res.data)
        })
    },[])
    
    return(
        <div className="container-fluid bg-white text-dark" style={{height:'100vh'}}>
           <div className="row m-3">
            <div className="col-4">
                <img src={preview.image} width={200}/>
               
            </div>
            <div className="col-8">
                    <dl>
                        <dt>{preview.title}</dt>
                        <dd>{preview.description}</dd>
                        <dt>{preview.price}</dt>
                        <dd className="d-flex">
                           <div>
                           {
                                Object.values(preview).map(i=>
                                   <div className="" key={i.rate}>
                                     <span>{i.rate}</span>
                                   </div>
                                    
                                )
                            }
                           </div>
                           <div> <span className="bi bi-star-fill text-success"></span><span className="bi bi-star-fill text-success"></span><span className="bi bi-star-fill text-success"></span><span className="bi bi-star-fill text-success"></span><span className="bi bi-star-half text-success"></span></div>
                          <br/>
                           <div >
                           {
                                Object.values(preview).map(i=>
                                   <div className="" key={i.count}>
                                     <span>{i.count}</span>
                                   </div>
                                    
                                )
                            }
                           </div>
                        </dd>
                    </dl>
                    <button className="btn btn-primary my-2">Add to Cart</button>
            </div>
           </div>
          <Link to={`/categories/products/${preview.category}`}> Back to products</Link>
        </div>
    )
}7842121989 