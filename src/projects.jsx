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

            <div style={{ backgroundColor: "#000000ff" }} id="project" className="container-fluid  "   >
                <Header />
                <div className="row" >

                    <section style={{ maxHeight: "470px", }} className=" mt-5  col-md-7 d-flex justify-content-center">
                        <a href="https://refrigeracao-sub-zero.netlify.app/" className="fade"><img className="fade imgproject" style={{ maxHeight: "100%", width: "100%" }} src={subzero} alt="imagem da aplicação" /></a>
                    </section>

                    <section className="col-md-5 d-flex flex-column justify-content-around align-items-center">
                        <h1 className="text-center mt-5  fade  ">Freelancer</h1>
                        <p className="text-center  mt-5  fade " >Desenvolvi um site real para um prestador de serviços de refrigeração.</p>  <div className="fade">
                            <img src={html} alt="html icon" />
                            <img src={css} width={48} alt="css icon" />
                            <img src={js} alt="javascript" />
                            <img src={boostrap} alt="bootstrap icon" />
                            <img src={react} width={40} alt="react icon" />

                        </div>
                    </section>

                    <section style={{ maxHeight: "470px", }} className=" mt-5  col-md-7 d-flex justify-content-center">
                        <a href="https://movie-12i6.vercel.app/" className="fade"><img className="fade  imgproject" style={{ maxHeight: "100%", width: "100%" }} src={movie} alt="imagem da aplicação" /></a>
                    </section>

                    <section className="col-md-5 d-flex flex-column justify-content-around align-items-center">
                        <h1 className="text-center mt-5  fade  ">Filmes</h1>
                        <p className="text-center  mt-5  fade   " >Catálogo de filmes usando API do TMDB. Com React, JS e estilos com Bootstrap</p>
                        <div className="fade">
                            <img src={html} alt="html icon" />
                            <img src={css} width={48} alt="css icon" />
                            <img src={js} alt="javascript" />
                            <img src={boostrap} alt="bootstrap icon" />
                            <img src={react} width={40} alt="react icon" />
                        </div>
                    </section>

                    <section style={{ maxHeight: "470px" }} className="  mt-5 col-md-7 d-flex mt-md-5  justify-content-center">
                        <a href="https://storied-pegasus-683f73.netlify.app/" className="fade">  <img className="fade  imgproject" style={{ maxHeight: "100%", width: "100%" }} src={world} alt="imagem da aplicação" /></a>

                    </section>

                    <section className="   mt-5 col-md-5 d-flex flex-column justify-content-around align-items-center ">
                        <h1 className="text-center  mt-5 fade  "> Clima</h1>
                        <p className=" text-center mt-5  fade">Aplicação que consome API de clima via cidade. Feita com HTML, CSS e Js e React. </p>
                        <div className="fade">
                            <img src={html} alt="html icon" />
                            <img src={css} width={48} alt="css icon" />
                            <img src={js} alt="javascript" />
                            <img src={boostrap} alt="bootstrap icon" />
                            <img src={react} width={40} alt="react icon" />
                        </div>

                    </section>


                    <section style={{ maxHeight: "470px" }} className="  mt-5 col-md-7 d-flex mt-md-5  justify-content-center">
                        <a href="https://whimsical-beignet-2ebfa9.netlify.app/" className="fade ">  <img className="fade  imgproject" style={{ maxHeight: "100%", width: "100%" }} src={store} alt="imagem da aplicação" /></a>

                    </section>
                    <section className="  mt-5  col-md-5 d-flex flex-column justify-content-around align-items-center ">
                        <h1 className="text-center mt-5  fade "> Loja virtual</h1>
                        <p className=" text-center  mt-5  fade ">Loja com layout moderno e carrinho funcional. Feita com React e Bootstrap.</p>
                        <div className="fade">
                            <img src={html} alt="html icon" />
                            <img src={css} width={48} alt="css icon" />
                            <img src={js} alt="javascript" />
                            <img src={boostrap} alt="bootstrap icon" />
                            <img src={react} width={40} alt="react icon" />
                        </div>
                    </section>

                    <section style={{ maxHeight: "470px", }} className=" mt-5  col-md-7 d-flex justify-content-center">
                        <a href="https://wondrous-liger-5379cd.netlify.app/" className="fade"><img className="fade  imgproject" style={{ maxHeight: "100%", width: "100%" }} src={apple} alt="imagem da aplicação" /></a>
                    </section>

                    <section className="col-md-5 d-flex flex-column justify-content-around align-items-center">
                        <h1 className="text-center mt-5  fade  "> Loja Apple</h1>
                        <p className="text-center  mt-5  fade   " >	Interface inspirada na Apple Store, com produtos simulados. Foco em design responsivo.</p>
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
