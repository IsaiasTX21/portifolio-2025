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
     


        <main   >
              <Header />

          <div  id="sobremim" className="text-center position-relative d-flex flex-column ms-auto me-auto">
            <h1 style={{ marginTop: "4vh" }} className="mb-4">Trajetória</h1>
            <p id="aboutme" className=" mt-md-0  ms-auto me-auto " >
             Sou um jovem desenvolvedor movido por desafios e pela vontade de evoluir a cada linha de código. 
             Tenho experiência com projetos como freelancer e uma curiosidade insaciável que me leva sempre a 
             buscar mais conhecimento. 
            </p>
            <h2 >Habilidades</h2>

            <div className="d-flex justify-content-center ">
              <div className="ms-1">
                <img src={html} alt="html-5" />
                <p >html 5</p></div>
              <div className="ms-1" >
                <img src={css} width={48} alt="css3" />
                <p >css 3</p>
              </div>
              <div className="ms-1">
                <img src={js} alt="javascript" />
                <p >js</p>
              </div>
              <div className="ms-1">
                <img src={ts}/>
                        <p >ts</p>
              </div>
              <div className="ms-1">
                <img src={boostrap} />
                <p >bs 5</p>
              </div>
              <div className="ms-1">
                <img src={react} alt="bootstrap"></img>
                <p >react</p>
              </div>
                
                </div> 
                        <img  id="astronauta" className=" mt-auto"    src={isaias} ></img>
                
                </div>


    

        </main>

  


    </>
  );
}

export default Sobremim;
