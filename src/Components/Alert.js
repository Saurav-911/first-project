import React from 'react'

export default function Alert(props) {
  const capital=(word)=>{
    word=word.toLowerCase();
    return word.charAt(0).toUpperCase()+word.slice(1);
  }
  return (
  props.alert &&<div className={`alert alert-${props .alert.type} alert-dismissible fade show`} role="alert">
       {capital(props.alert.msg)}
      
  </div>
    
  )
}
