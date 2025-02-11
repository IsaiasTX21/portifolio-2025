
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./hearder"
import Body from "./body";
import Projects from "./projects";
import Sobremim from "./sobremin";



function App() {


  return (
    <>
    <BrowserRouter>    
     <Routes>
      <Route path="" element={[<Header/>,<Body/>]} />
        <Route path="sobremim" element={[<Header/>,<Sobremim/>]} />
       <Route path="projects"  element={[<Header/>,<Projects/>]}>  </Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
