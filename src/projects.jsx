import Header from "./hearder";
import apple from "./asserts/Apple.png"
import world from "./asserts/world.png"
import store from "./asserts/store.png"
import movie from "./asserts/movie.png"
import subzero from "./asserts/refrigeraçao.png"
import html from "../src/asserts/html.png"
import css from "../src/asserts/css.png"
import js from "../src/asserts/javascript.png"
import react from "../src/asserts/react.png"
import boostrap from "../src/asserts/bootstrap.png"

function Projects() {

    return (
        <>
            <Header />
            <div style={{ backgroundColor: "#000000ff" }} className="container-fluid w-100 "   >
                <div className="row" >

                <section style={{ maxHeight: "470px", }} className=" mt-5  col-md-7 d-flex justify-content-center">
                        <a href="https://refrigeracao-sub-zero.netlify.app/" className="fade"><img className="fade" style={{ maxHeight: "100%", width: "100%" }} src={subzero} alt="imagem da aplicação" /></a>
                    </section>
                    
                    <section className="col-md-5 d-flex flex-column justify-content-around align-items-center">
                        <h1 style={{ color: "#6F848C" }} className="text-center mt-5  fade  ">Freelancer</h1>
                        <p style={{ color: "#6F848C" }} className="text-center  mt-5  fade   " >Conserto de equipamentos de refrigeração.</p>
                        <div className="fade">                  
                       <img src={html} alt="html icon" />
                        <img src={css} width={48} alt="css icon" />
                        <img src={js} alt="javascript" />
                        <img src={boostrap} alt="bootstrap icon" />
                        <img src={react} width={40} alt="react icon" /> 

                        </div>
                    </section>

                    <section style={{ maxHeight: "470px", }} className=" mt-5  col-md-7 d-flex justify-content-center">
                        <a href="https://movie-12i6.vercel.app/" className="fade"><img className="fade" style={{ maxHeight: "100%", width: "100%" }} src={movie} alt="imagem da aplicação" /></a>
                    </section>

                    <section className="col-md-5 d-flex flex-column justify-content-around align-items-center">
                        <h1 style={{ color: "#6F848C" }} className="text-center mt-5  fade  ">Movie</h1>
                        <p style={{ color: "#6F848C" }} className="text-center  mt-5  fade   " >Descubra os filmes que estão em alta e extraia informação deles.  </p>
                        <div className="fade"> 
                        <img src={html} alt="html icon" />
                        <img src={css} width={48} alt="css icon" />
                        <img src={js} alt="javascript" />
                        <img src={boostrap} alt="bootstrap icon" />
                        <img src={react} width={40} alt="react icon" />
                            </div>
                    </section>

                    <section style={{ maxHeight: "470px" }} className="  mt-5 col-md-7 d-flex mt-md-5  justify-content-center">
                        <a href="https://playful-tarsier-d7b87e.netlify.app/" className="fade">  <img className="fade" style={{ maxHeight: "100%", width: "100%" }} src={world}  alt="imagem da aplicação" /></a>

                    </section>

                    <section className="   mt-5 col-md-5 d-flex flex-column justify-content-around align-items-center ">
                        <h1 style={{ color: "#6F848C" }} className="text-center  mt-5 fade  "> wheather</h1>
                        <p style={{ color: "#6F848C" }} className=" text-center mt-5  fade"> Descubra as condições climáticas de todas as regiões do mundo. </p>
                        <div className="fade"> 
                        <img src={html} alt="html icon" />
                        <img src={css} width={48} alt="css icon" />
                        <img src={js} alt="javascript" />
                        <img src={boostrap} alt="bootstrap icon" />
                        <img src={react} width={40} alt="react icon" />
                          </div>

                    </section>

                    
                    <section style={{ maxHeight: "470px" }} className="  mt-5 col-md-7 d-flex mt-md-5  justify-content-center">
                        <a href="https://whimsical-beignet-2ebfa9.netlify.app/" className="fade ">  <img className="fade" style={{ maxHeight: "100%", width: "100%" }} src={store} alt="imagem da aplicação" /></a>

                    </section>
                    <section className="  mt-5  col-md-5 d-flex flex-column justify-content-around align-items-center ">
                        <h1 style={{ color: "#6F848C" }} className="text-center mt-5  fade "> virtual Store</h1>
                        <p style={{ color: "#6F848C" }} className=" text-center  mt-5  fade ">Uma loja virtual onde você pode encontrar roupas, jóias e informática.  </p>
                        <div className="fade"> 
                        <img src={html} alt="html icon" />
                        <img src={css} width={48} alt="css icon" />
                        <img src={js} alt="javascript" />
                        <img src={boostrap} alt="bootstrap icon" />
                        <img src={react} width={40} alt="react icon" />
                        </div>
                    </section>
      
                <section style={{ maxHeight: "470px", }} className=" mt-5  col-md-7 d-flex justify-content-center">
                        <a href="https://wondrous-liger-5379cd.netlify.app/" className="fade"><img className="fade" style={{ maxHeight: "100%", width: "100%" }} src={apple} alt="imagem da aplicação" /></a>
                    </section>
                    
                    <section className="col-md-5 d-flex flex-column justify-content-around align-items-center">
                        <h1 style={{ color: "#6F848C" }} className="text-center mt-5  fade  ">Apple</h1>
                        <p style={{ color: "#6F848C" }} className="text-center  mt-5  fade   " >Veja os dispositivos mais incríveis do mercado.</p>
                        <div className="fade"> 
                        <img src={html} alt="html icon" />
                        <img src={css} width={48} alt="css icon" />
                        <img src={js} alt="javascript" />
                        <img src={boostrap} alt="bootstrap icon" />
                        <img src={react} width={40} alt="react icon" />
                        </div>
                    </section>
                </div>

            </div>
        </>

    )
}

export default Projects
