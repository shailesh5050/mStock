import React,{useState,useEffect} from 'react'

const Companies = ({loggedIn}) => {
  
  return (
    <div className='container mt-5'>
    <div class="card text-white bg-primary mb-3" style={{maxWidth:'22rem'}}>
      <div class="card-header">Wipro</div>
        <div class="card-body">
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div class="card-footer">
      <div className='d-flex align-items-center'>
        <h5 className='text-white mx-1'>Today's Price $5000</h5>
        <button className='btn btn-success'>Watch</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Companies