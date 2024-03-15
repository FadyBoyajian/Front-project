import { useEffect, useState } from 'react'
import './login.css'
import axios from 'axios'

function Login() {

 const [user,setuser] = useState()
 const [em,setem] =useState()
 const [pw,setpw] =useState()

 

  useEffect(()=>{
  axios.get('https://fakestoreapi.com/users')
  .then((r)=>setuser(r.data))
  .catch(err=>console.log(err))
})
const approvelog = ()=>{
  user?.filter((r)=>{
    if(r.email == em){
      if(r.password == pw){
        const answer = document.querySelector('.answer')
        answer.innerHTML = 'Valid login data'
      }
     else{
      document.querySelector('h2').innerHTML = 'Check your email or password'
       
    }
    }
  })
}


  return (
    
    <div className='logcont'>
      <div className='logbox'>
        <input type='email' placeholder='Type your email' onChange={(e)=> setem(e.target.value)}/>
        <input type='password' placeholder='Type your password' onChange={(e)=> setpw(e.target.value)}/>
        <button onClick={()=>approvelog()}>Login</button>
        <h3 className='answer'> </h3>
        <h2 className='answertwo'> </h2>
        </div>
        </div>
        
  )
}

export default Login