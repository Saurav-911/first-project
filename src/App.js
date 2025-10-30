
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Alert from './Components/Alert';
function App() {
  const[mode,setMode]=useState("light"); 
  const[opp,setopp]=useState("dark");
  
  const[alert,setalert]=useState(null);
  
  const showalert=(message,type)=>{
    setalert({msg:message,
              type: type
    });    
    setTimeout(()=>{
      setalert(null);
    
    },2000)
  }
  const green=()=>{
    if (mode==="light" ){
      setMode("success");
      document.body.style.backgroundColor = '#055852ff';
      document.body.style.color = 'white';
      showalert("green mode has been enabled", "success");
  }
   else{
    setMode("light");
    document.body.style.backgroundColor = '#fafafa';
    document.body.style.color = 'black';
    showalert ("green mode has been disabled", "success");
}
  }
const blue=()=>{
    if (mode==="light" ){
      setMode("primary");
      document.body.style.backgroundColor = '#5b4df8ff';
      document.body.style.color = 'white';
      showalert("green mode has been enabled", "success");
  }
   else{
    setMode("light");
    document.body.style.backgroundColor = '#fafafa';
    document.body.style.color = 'black';
    showalert ("green mode has been disabled", "success");
}
}
  

  const Toogle=()=>{
    if (mode==="dark" && opp==="light"){
      setMode("light");
      setopp("dark")
      document.body.style.backgroundColor = '#fafafa';
      document.body.style.color = 'black';
      showalert("dark mode has been disabled", "success");
  }
  else{
    setMode("dark");
    setopp("light");
    document.body.style.backgroundColor = '#0c1821';
    document.body.style.color = 'white';
    showalert ("dark mode has been enabled", "success");
  }
  }

return (
<>

<Router>
<Navbar title="TextUtils" Home="Home" About="About Us" toogle={Toogle} green={green} mode={mode} opp={opp} blue={blue}/>
<Alert alert={alert}/>
<div className="container my-3">
  <Routes>
    <Route exect path="/Textform"element={<Textform showAlert={showalert}/> }/> 
    <Route exect path="/About" element={<About About="About Us" mode={mode} opp={opp} />}/>
  </Routes>
</div>
</Router>
</>
);
}

export default App;
