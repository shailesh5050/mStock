import React from 'react'
import { Link } from 'react-router-dom'
const Login = ({name}) => {
    console.log(name);
    const onSubmit = async (e) => {
        e.preventDefault();
        try{
            
        }catch(error){

        }
      }
  return (
    <div className='container '>
       <div className="row mt-5">
           <div className="col-md-4 offset-md-4">
           <div className="card py-3 shadow p-3 mb-5 bg-body rounded">
           
           <div className="card-body ">
           
            <form onSubmit={onSubmit}>
            <h2>Login</h2>

            {/* ALert Message */}
            <div class="alert alert-dismissible alert-danger">
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
<p>Email/Password is wrong !</p>
</div>
            <div class="form-group">
 
 <div class="form-floating mb-3">
   <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
   <label for="floatingInput">Email address</label>
 </div>
 <div class="form-floating">
   <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
   <label for="floatingPassword">Password</label>
 </div>
</div>

        <button type='submit' className='btn btn-success mt-3 '>Login</button>
        
            </form>
            

           </div>
       </div>
           </div>
       </div>
    </div>
  )
}

export default Login