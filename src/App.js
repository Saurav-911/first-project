
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
<>
<Router>
<Navbar title="TextUtils" Home="Home TextUtels"/>
<div className="container my-3">
  <Routes>
    <Route path="/"element={<Textform/> }/> 
    <Route path="/About" element={<About/>}/>
  </Routes>
</div>
</Router>
</>
);
}
export default App;
