import React from 'react'

export default function About(props) {

  
  return (
    <>
    
    
    <div className={`container bg-${props.mode} text-${props.opp} p-3 w-100`}>
     
        <h2 className='text-center '>{props.About} </h2>
       <div className='d-flex justify-content-center' ><p className='font-size-30'> wellcome to the text utels This is the application for those 
        who want to convert there text in uppercase and lowercase thanks for this </p>
       </div>
    
    </div>
    
    </>
  )
    
}
