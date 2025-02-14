import { useNavigate } from "react-router-dom"



function Header() {
  const navigate = useNavigate()

  return (
    <>
<header style={{height:"5vh"}} className="sticky-top " >
  <nav class="navbar d-flex  h-100">

      <div class="  w-100 position-absolute" >
        <ul className="d-flex justify-content-around">
        <li> <a onClick={()=> navigate("/")} class="navbar-brand  ">Principal</a> </li>
        <li> <a onClick={()=> navigate("/sobremim")}  class="navbar-brand " >Sobre mim</a></li>
        <li><a onClick={()=> navigate("/projects")} class="navbar-brand " >Projetos</a> </li>
        </ul>
   
      </div>

  </nav>
</header>


    </>
  )
}

export default Header
