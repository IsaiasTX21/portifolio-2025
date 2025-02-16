import { useNavigate } from "react-router-dom"



function Header() {
  const navigate = useNavigate()

  return (
    <>
    
<header style={{height:"5vh", backgroundColor: "#01011A"}} className="sticky-top bg-gradient  " >
  <nav class="navbar d-flex  h-100">

      <div class="  w-100 position-absolute " >
        <ul className="d-flex justify-content-around p-0 m-0">
        <li><a  style={{color:"#002aa8"}} className="navbar-brand  " onClick={()=> navigate("/")} >Principal</a> </li>
        <li><a  style={{color:"#002aa8"}} className="navbar-brand  " onClick={()=> navigate("/sobremim")}  >Sobre mim</a></li>
        <li><a   style={{color:"#002aa8"}} className="navbar-brand  " onClick={()=> navigate("/projects")} >Projetos</a> </li>
        </ul>
   
      </div>

  </nav>
</header>


    </>
  )
}

export default Header
