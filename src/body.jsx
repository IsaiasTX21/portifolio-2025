import Header from "./hearder"

function Body() {


  return (
    <>

      <div className=" d-md-flex desk  ">

        <main style={{ height: "100vh", backgroundColor: "black" }} className=" d-flex flex-column  col-md-7    ">
          <Header />
          <h1  style={{ color:"#6F848C" }} className="text-center mt-2  mt-4 fade "> Hello world !</h1>
          <p style={{ fontSize: "18px" ,color:"#6F848C" }} className=" mt-4 fade text-center ">Me chamo Isaias e gostaria que voce enxergasse
            o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>
          <a href="https://drive.google.com/file/d/1IKLGIUwCZTcSwgU5HRqQz_VP95eqVAC4/view?usp=drive_link" className="fade btn btn-primary ms-auto me-auto mt-5  text-white " >currículo</a>
        </main>

        <div style={{ height: "100vh", backgroundImage: "url('https://i.ibb.co/p6CTDLCB/Captura-de-tela-2025-02-10-194259.png')", backgroundSize: "cover" }} className=" col-md-5 "></div>

      </div>

      <div className="  d-md-none mobile d-flex flex-column   ">

        <main style={{ height: "50vh", backgroundColor: "black" }} className="text-center"  >
          <Header />
          <h1 className=" mt-3 text-primary text-center "> Hello world !</h1>
          <p style={{ fontSize: "18px", color:" #6F848C "}} className="text-center  ms-auto me-auto  ">Me chamo isaias e gostaria que voce enchergasse
            o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>
      <a style={{position:"relative", top:"5vh"}} href="https://drive.google.com/file/d/1IKLGIUwCZTcSwgU5HRqQz_VP95eqVAC4/view?usp=drive_link" className=" btn btn-primary  text-white " >currículo</a>         
        </main>

        <div style={{ backgroundImage: "url('https://i.ibb.co/k69XzDTm/Captura-de-tela-2025-02-10-201835.png')", backgroundSize: "cover", height: "50vh" }} className=" col-md-5 ">
        </div>
      </div>



    </>
  )
}

export default Body
