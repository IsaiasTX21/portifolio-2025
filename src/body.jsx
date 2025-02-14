

function Body() {


  return (
    <>

      <div className=" d-md-flex  desk ">

        <main style={{ height: "95vh", backgroundColor: "black" }} className=" col-md-7    ">

          <h1 className="text-center "> Hello world !</h1>
          <p style={{ fontSize: "18px" }} className=" text-cgenter">Me chamo Isaias e gostaria que voce enxergasse
            o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>

          <img style={{ width: "260px", height: "260px", left: "100px", top: "10vh" }} src="https://i.ibb.co/Kc1qbVZf/Imagem-do-Whats-App-de-2025-02-11-s-18-31-07-9ac51c7c.jpg" className=" fadephoto  float-end position-relative" />
          <div style={{ bottom: "180px" }} className="  d-flex position-relative justify-content-center w-100 " >
          </div>
        </main>

        <div style={{ height: "95vh", backgroundImage: "url('https://i.ibb.co/p6CTDLCB/Captura-de-tela-2025-02-10-194259.png')", backgroundSize: "cover" }} className=" col-md-5 "></div>

      </div>

      <div className="  d-md-none mobile    ">
        <main style={{ height: "25vh", backgroundColor: "black" }}  >
          <h1 className="    text-center"> Hello world !</h1>
          <p style={{ fontSize: "18px" }} className="   text-center mt-5">Me chamo isaias e gostaria que voce enchergasse
            o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>

        </main>

        <div style={{ height: "20vh", backgroundColor: "black" }} className=" d-flex justify-content-center align-items-end ">
          <img style={{ top: "100px", height: "200px" }} src="https://i.ibb.co/Kc1qbVZf/Imagem-do-Whats-App-de-2025-02-11-s-18-31-07-9ac51c7c.jpg" className=" fadephotomobile position-relative d-flex justify-content-center align-items-end " />
        </div>


        <div style={{ backgroundImage: "url('https://i.ibb.co/k69XzDTm/Captura-de-tela-2025-02-10-201835.png')", backgroundSize: "cover", height: "50vh" }} className=" col-md-5 ">  
        <div style={{ top: "180px" }} className="d-flex position-relative  justify-content-center " >
        </div></div>
      </div>



    </>
  )
}

export default Body
