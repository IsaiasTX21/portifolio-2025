import { useNavigate } from "react-router-dom"



function Header() {
  const navigate = useNavigate()

  return (
    <>
<header style={{height:"5vh"}} className="sticky-top " >
  <nav class="navbar d-flex  h-100">

      <div class=" d-flex justify-content-around w-100 position-absolute" >
        <a onClick={()=> navigate("/")} class="navbar-brand  ">Principal</a>
        <a onClick={()=> navigate("/sobremim")}  class="navbar-brand " >Sobre mim</a>
        <a onClick={()=> navigate("/projects")} class="navbar-brand " >Projetos</a>
      </div>

  </nav>
</header>


    </>
  )
}

export default Header
