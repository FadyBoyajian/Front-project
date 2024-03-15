import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Products.css'
import { Link } from 'react-router-dom'


function Products() {
  const [prodata,setpro] = useState()

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((r)=> setpro(r.data))
    .catch(err=>console.log(err))
  },[])

  return (
    
    <div className='pcontainer'>
      {
      prodata?.map((i) => {
        return(
       <div className='pbox'>
        <Link to = {`/singleproduct/${i.id}`}>
        <h1>{i.title}</h1>
        <img src= {i.image} alt='' />
        <h3> Price :{i.price} EGP </h3>
       </Link>
       </div>
       )}
      )
      }
    </div>
  )
}
export default Products