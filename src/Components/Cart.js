import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { garmentslice } from '../Redux/garmentslice';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router";
import './cart.css';



function Cart() {

  const para = useParams()
  const [prodata,setpro] = useState()

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/'+para.id )
    .then((r)=> setpro(r.data))
    .catch(err=>console.log(err))
  })


  const counts = useSelector((s)=>s.garment.numberofitems)
  const dispatch = useDispatch()
  return (
    <div className='cart'>
        <img src={prodata?.image} alt=''/>
        <h1>{prodata?.title}</h1>
      <div className='order'>
         <h2>number of order </h2>
         <div className='theno'> {counts} </div> 
         <button onClick={()=>dispatch(garmentslice.actions.addtocart(prodata))}>Order here</button>
       </div>
    </div>
  )
}

export default Cart