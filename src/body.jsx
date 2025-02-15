import Header from "./hearder"

function Body() {


  return (
    <>
   
      <div className=" d-md-flex  desk w-100   "> 

        <main style={{ height: "100vh", backgroundColor: "black" }} className="  col-md-7    ">
        <Header/>
          <h1 className="text-center mt-5 text-primary  fade "> Hello world !</h1>
          <p style={{ fontSize: "18px" }} className=" mt-5 fade ms-auto me-auto w-50">Me chamo Isaias e gostaria que voce enxergasse
            o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>

          
          <div className="  d-flex position-relative justify-content-center mt-5 w-100 " >
          <a  href="https://drive.google.com/file/d/1IKLGIUwCZTcSwgU5HRqQz_VP95eqVAC4/view?usp=drive_link"  className="fade  btn btn-outline-primary mt-5  text-white " >currículo</a>
          </div>
        </main>

        <div style={{ height: "100vh", backgroundImage: "url('https://i.ibb.co/p6CTDLCB/Captura-de-tela-2025-02-10-194259.png')", backgroundSize: "cover" }} className=" col-md-5 "></div>

      </div>

      <div className="  d-md-none mobile    ">
        
        <main style={{ height: "25vh", backgroundColor: "black" }} className="text-center"  >
        <Header/>
          <h1 className="  text-primary mt-3 text-center"> Hello world !</h1>
          <p style={{ fontSize: "18px" }} className="text-center ms-auto me-auto  w-75 mt-3">Me chamo isaias e gostaria que voce enchergasse
            o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>
            <a  href="https://drive.google.com/file/d/1IKLGIUwCZTcSwgU5HRqQz_VP95eqVAC4/view?usp=drive_link"  className=" btn btn-outline-primary mt-3  text-white " >currículo</a>
        </main>

        <div style={{ height: "25vh", backgroundColor: "black" }} className=" d-flex justify-content-center align-items-end ">
         
        </div>


        <div style={{ backgroundImage: "url('https://i.ibb.co/k69XzDTm/Captura-de-tela-2025-02-10-201835.png')", backgroundSize: "cover", height: "50vh" }} className=" col-md-5 ">  
        <div style={{ top: "180px" }} className="d-flex position-relative  justify-content-center " >
        </div></div>
      </div>



    </>
  )
}

export default Body
