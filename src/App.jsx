
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./body";
import Projects from "./projects";
import Sobremim from "./sobremin";



function App() {


  return (
    <>
    <BrowserRouter>    
     <Routes>
      <Route path="" element={<Body/>} />
        <Route path="/sobremim" element={<Sobremim/>} />
       <Route path="/projects"  element={<Projects/>}>  </Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
