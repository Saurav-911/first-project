import React,{useState} from 'react'


export default function Textform(props) {
  const [Text,setText]=useState("Enter the text and click the button");
  //text="new text";wrong 
  //setText("text");
  const handleUpper= ()=>{ 
      alert("Thank you for clicking on the upper case button")
      setText(Text.toUpperCase());
    }
  
  const handlelower= ()=>{ 
      alert("Thank you for clicking on the lower case button")
      setText(Text.toLowerCase());
    }
  
  
  const HandleOnChange=(event)=>{ 
    setText(event.target.value);
  }
  return (
    
    <>
    
    <div>
      <div className="mb-3">
          <label htmlFor="Textform" className="form-label"><h3>Enter the text first</h3></label>
          <textarea className="form-control" onChange={HandleOnChange} id="Textform" rows="6"></textarea>
      </div>
      
    </div>
    <button className='btn btn-danger me-3' onClick={handleUpper}>Convert to Upercase</button>
    <button className='btn btn-primary ms-3 ' onClick={handlelower}>Convert to lowercase</button>
    <div className="mb-3">
          <label htmlFor="Textform1" className="form-label"><h3>Result</h3></label>
          <textarea className="form-control" value={Text} id="Textform1" rows="6"></textarea>
      </div>
    
    </>
  )
}
