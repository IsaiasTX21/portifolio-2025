import Header from "./hearder"

function Body() {


  return (
    <>
      <Header />
      <div className=" d-md-flex desk  ">

        <main style={{ height: "95vh", backgroundColor: "#01011A" }} className=" d-flex flex-column text-center  col-md-12    ">
          <h1 style={{ color: "#6F848C", marginTop: "25vh" }} className="text-center fade "> Hello world !</h1>
          <p style={{ fontSize: "18px", color: "#6F848C" }} className=" w-50 mt-4 fade ms-auto me-auto ">Me chamo Isaias e gostaria que voce enxergasse
            o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>
          <a href="https://drive.google.com/file/d/1IKLGIUwCZTcSwgU5HRqQz_VP95eqVAC4/view?usp=drive_link" className="fade btn btn-primary ms-auto me-auto mt-4  text-white " >currículo</a>
        </main>
        
      </div>

      <div className="  d-md-none mobile d-flex flex-column   ">

        <main style={{ backgroundColor: "#01011A", height: "95vh" }} className=" text-center"  >

          <h1 className="fade" style={{ color: "#6F848C", marginTop: "25vh" }} > Hello world !</h1>
          <p style={{ fontSize: "18px", color: " #6F848C " }} className="fade mt-5 ">Me chamo isaias e gostaria que voce enchergasse
            o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>
          <a style={{ position: "relative" }} href="https://drive.google.com/file/d/1IKLGIUwCZTcSwgU5HRqQz_VP95eqVAC4/view?usp=drive_link" className=" mt-5 fade btn btn-primary  text-white " >currículo</a>

        </main>


      </div>



    </>
  )
}

export default Body
