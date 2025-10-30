import React,{useState} from 'react'

export default function Textform(props) {
  const [Text,setText]=useState("Enter the text and click the button");
  //text="new text";wrong 
  //setText("text");
  // const [num,setnum]=useState(0);
  // const [numChar,setnumchar]=useState(0);
  const handleUpper= ()=>{ 
      props.showAlert("Thank you for clicking on the upper case button","success");
      setText(Text.toUpperCase());
      
    }
  
  const handlelower= ()=>{ 
      // alert("Thank you for clicking on the lower case button")
      setText(Text.toLowerCase());
      props.showAlert("Thank you for clicking on the lower case button","success");
    }
      
  const firstcharacter= () =>{
      let asd=Text.charAt(0).toUpperCase() + Text.slice(1).toLowerCase()+".";
      setText(asd);
      props.showAlert("Thank you for clicking on the normal case button","success");  
  }
  
  const HandleOnChange=(event)=>{ 
    setText(event.target.value);
  }
  return (
    
    <>
    
    <div className='contaner'>
      <div className="mb-3">
          <label htmlFor="Textform" className="form-label"><h3>Enter the text first</h3></label>
          <textarea className="form-control" onChange={HandleOnChange} style={{backgroundColor: props.mode==='dark'?"black":"white" }} id="Textform" rows="6"></textarea>
      </div>
      
    </div>
    <button className='btn btn-danger me-3 mt-3 ' style={{width:200 }} onClick={handleUpper}>Convert to Upercase</button>
    <button className='btn btn-primary me-3 mt-3 ' style={{width:200 }} onClick={handlelower}>Convert to lowercase</button>
    <button className='btn btn-success mt-3 ' style={{width:200 }} onClick={firstcharacter}>Convert to normal text</button>
    <div className="mb-3">
          <label htmlFor="Textform1" className="form-label"><h3>Result</h3></label>
          <textarea className="form-control" value={Text} id="Textform1" rows="6"></textarea>
      </div>
    <div className="container mt-9  " style={{backgroundColor: '#D72323', color:'#3E3636'} }>
      <h3>Total no of words and characters</h3>
      <p><b>words = {Text.trim()===''? 0 :Text.trim().split(/\s+/).length}<br></br> Character = {Text.length}</b></p>
      <h3>preview</h3>
      <p><b>{Text.length>0?Text:"Enter the text to preview"}</b></p>
    </div>
    </>
  )
}
