import { useNavigate } from "react-router-dom"



function Header() {
  const navigate = useNavigate()

  return (
    <>
    
<header style={{height:"40px", backgroundColor: "#000000ff"}} className="sticky-top bg-gradient" >
  <nav class="navbar d-flex h-100">

      <div class="  w-100 position-absolute " >
        <ul className="d-flex justify-content-around p-0 m-0">
        <li><a  className="navbar-brand fade " onClick={()=> navigate("/")} >Principal</a> </li>
        <li><a  className="navbar-brand fade" onClick={()=> navigate("/sobremim")}  >Sobre mim</a></li>
        <li><a  className="navbar-brand fade " onClick={()=> navigate("/projects")} >Projetos</a> </li>
        
        </ul>
   
      </div>

  </nav>
</header>


    </>
  )
}

export default Header
