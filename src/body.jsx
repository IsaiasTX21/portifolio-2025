import Header from "./hearder"

function Body() {


  return (
    <>
      <Header />

      <div className="  d-md-none d-lg-flex  desk flex-column   ">

        <main style={{ minHeight: "95dvh", backgroundColor: "#01011A", backgroundRepeat: "no-repeat", backgroundSize: "95vh", backgroundImage: "url('https://i.ibb.co/HLC6rDTz/planet-earth-1457453-1280-Photoroom.jpg')", backgroundPositionY: "105%", backgroundPositionX: "50%" }} className=" d-flex flex-column text-center  col-md-12    ">

          <img className="ms-auto me-auto " style={{ width: "150px" }} src="https://i.ibb.co/sJ3M0C3m/Sun-PNG-Free-Download-Photoroom-1.jpg" />
          <h1 style={{ color: "#6F848C" }} className="text-center fade mt-3 "> Hello world !</h1>
          <p style={{ fontSize: "18px", color: "#6F848C" }} className=" mt-3 w-50  fade ms-auto me-auto ">Me chamo Isaias e gostaria que você
            enxergasse o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>

          
          <a  id="resume" href="https://drive.google.com/file/d/1IKLGIUwCZTcSwgU5HRqQz_VP95eqVAC4/view?usp=drive_link" className=" fade mt-2 btn btn-primary ms-auto me-auto  text-white " >currículo</a>
        </main>

      </div>

      <div className="  mobile d-lg-none d-flex flex-column   ">

        <main style={{ minHeight: "95dvh", backgroundColor: "#01011A", backgroundRepeat: "no-repeat", backgroundSize: "95vh", backgroundImage: "url('https://i.ibb.co/HLC6rDTz/planet-earth-1457453-1280-Photoroom.jpg')", backgroundPositionY: "100%", backgroundPositionX: "50%" }} className=" text-center"  >

          <h1 className="fade" style={{ color: "#6F848C", marginTop: "7vh" }} > Hello world !</h1>
          <p style={{ fontSize: "18px", color: " #6F848C " }} className=" mt-5   fade ">Me chamo isaias e gostaria que voce enchergasse
            o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>
          <a href="https://drive.google.com/file/d/1IKLGIUwCZTcSwgU5HRqQz_VP95eqVAC4/view?usp=drive_link" className="fade mt-4  btn btn-primary ms-auto me-auto text-white " >currículo</a>

        </main>


      </div>



    </>
  )
}

export default Body
