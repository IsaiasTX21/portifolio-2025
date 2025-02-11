

function Body() {


  return (
    <>

      <div className=" d-md-flex  desk ">

        <div style={{ height: "95vh", backgroundColor: "black" }} className=" col-md-7    ">

          <h1 className="text-center "> Hello world !</h1>
          <p style={{ fontSize: "18px" }} className=" text-cgenter">Me chamo Isaias e gostaria que voce enxergasse
            o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>

          <img style={{ height: "300px", left: "100px" }} src="src/photos/Captura de tela 2025-02-09 23023.png" className=" fadephoto  float-end position-relative"  />
          <div style={{ bottom: "180px" }} className="  d-flex position-relative justify-content-center w-100 " >
            <button className="  btn btn-dark text-center">currículo</button>  </div>
        </div>

        <div style={{ height: "95vh", backgroundImage: "url('src/photos/Captura de tela 2025-02-10 194259.png')", backgroundSize: "cover" }} className=" col-md-5 "></div>

      </div>

      <div className="  d-md-none mobile    ">
        <div style={{ height: "25vh", backgroundColor: "black" }}  >
          <h1 className="    text-center"> Hello world !</h1>
          <p style={{ fontSize: "18px" }} className="   text-center mt-5">Me chamo isaias e gostaria que voce enchergasse
            o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>
        </div>

        <div style={{ height: "20vh", backgroundColor: "black" }} className=" d-flex justify-content-center align-items-end ">

          <img style={{ top: "100px", height: "200px" }} src="src/photos/Captura de tela 2025-02-09 23023.png" className=" fadephotomobile position-relative d-flex justify-content-center align-items-end " />
        </div>


        <div style={{ backgroundImage: "url('src/photos/Captura de tela 2025-02-10 201835.png')", backgroundSize: "cover", height: "50vh" }} className=" col-md-5 ">  <div style={{ top: "180px" }} className="d-flex position-relative  justify-content-center " >
          <button className="btn btn-dark text-center">currículo</button>  </div></div>
      </div>



    </>
  )
}

export default Body
