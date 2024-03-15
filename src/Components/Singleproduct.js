import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router";
import './singleproducts.css'
import { Link} from 'react-router-dom';


function Singleproduct() {

  const para = useParams()
  const [prodata,setpro] = useState()

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${para.id}` )
    .then((r)=> setpro(r.data))
    .catch(err=>console.log(err))
  })

  return (

    <div className='cont'>
      <div className='sbox'>
      <img src={prodata?.image} alt=''/>
      <div className='databox'>
      <h1>{prodata?.title}</h1>
      <p>{prodata?.description}</p>  
      <h3>Price: {prodata?.price} EGP</h3>
      <Link to={`/Cart/${prodata?.id}`}>Add to cart</Link>
      </div>
      </div>
    </div>
  )
}

export default Singleproduct