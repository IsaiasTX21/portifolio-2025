import Header from "./hearder"
import lua from "../src/asserts/lua.png"
import world from "../src/asserts/fullworld.png"





function Body() {

  return (
    <>

      <div className="d-lg-flex desk flex-column">
        
      <Header />

        <main id="principal" className=" position-relative d-flex flex-column text-center  ">
    
        <img id="lua" className=" ms-auto me-auto mt-4 d-md-block" style={{ width: "170px" }} src={lua} />

          <div >
          <h1 id="helloworld"  className="text-center  fade  "> Hello world !</h1>
          <p style={{ fontSize: "25px"}} className=" mt-3 w-75  fade ms-auto me-auto ">
            Me chamo Isaias e gostaria que você  enxergasse o meu mundo como eu vejo. </p>
          <a style={{backgroundColor:"#04609E"}} id="resume" href="https://drive.google.com/file/d/1IKLGIUwCZTcSwgU5HRqQz_VP95eqVAC4/view?usp=drive_link" 
           className=" fade btn mt-3 text-white btn ms-auto me-auto" >currículo</a>
            </div>
            
  
                        
            
            <img id="world" className="mt-auto" src={world}></img>
        
        </main>

      </div>

   



    </>
  )
}

export default Body
