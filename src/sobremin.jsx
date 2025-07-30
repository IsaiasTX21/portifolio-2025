import Header from "./hearder";
import html from "../src/asserts/html.png"
import css from "../src/asserts/css.png"
import js from "../src/asserts/javascript.png"
import ts from "../src/asserts/typescript.png"
import react from "../src/asserts/react.png"
import boostrap from "../src/asserts/bootstrap.png"

import isaias from "../src/asserts/isaias.png"


function Sobremim() {
  return (
    <>
      <Header />
      <div id="sobremim" className="">

        <main style={{ minHeight: "95dvh"}} className=" bg-black fadephoto  d-flex  flex-column flex-md-row  nave " >

          <div  style={{ minHeight: "95dvh"}} className="text-center d-flex flex-column ms-auto me-auto">
            <h1 style={{ color: "#6F848Cff", marginTop: "4vh" }} className="mb-4">Trajetória</h1>
            <p id="aboutme" className=" mt-md-0  ms-auto me-auto " style={{ color: "#6F848C" }}>
             Sou um jovem desenvolvedor movido por desafios e pela vontade de evoluir a cada linha de código. 
             Tenho experiência com projetos como freelancer e uma curiosidade insaciável que me leva sempre a 
             buscar mais conhecimento. 
            </p>
            <h2 style={{ color: "#6F848Cff" }}>Habilidades</h2>

            <div className="d-flex justify-content-center ">
              <div className="ms-1">
                <img src={html} alt="html-5" />
                <p style={{ color: "#6F848C" }}>html 5</p></div>
              <div className="ms-1" >
                <img src={css} width={48} alt="css3" />
                <p style={{ color: "#6F848C" }}>css 3</p>
              </div>
              <div className="ms-1">
                <img src={js} alt="javascript" />
                <p style={{ color: "#6F848C" }}>js</p>
              </div>
              <div className="ms-1">
                <img src={ts}/>
                        <p style={{ color: "#6F848C" }}>ts</p>
              </div>
              <div className="ms-1">
                <img src={boostrap} />
                <p style={{ color: "#6F848C" }}>bs 5</p>
              </div>
              <div className="ms-1">
                <img src={react} alt="bootstrap"></img>
                <p style={{ color: "#6F848C" }}>react</p>
              </div>
              
    
            </div>
                  <img style={{ width:"320px"}}    src={isaias} className=" ms-auto me-auto mt-auto"></img>
          
          </div>

        </main>

  
      </div>

    </>
  );
}

export default Sobremim;
