import Header from "./hearder"

function Body() {


  return (
    <>
      <Header />
   
      <div className=" d-md-flex desk flex-column   ">
     
        <main style={{ height: "95vh", backgroundColor: "#01011A", backgroundRepeat:"no-repeat", backgroundSize:"100vh", backgroundImage:"url('https://i.ibb.co/HLC6rDTz/planet-earth-1457453-1280-Photoroom.jpg')", backgroundPositionY:"100%", backgroundPositionX:"50%" }} className=" d-flex flex-column text-center  col-md-12    ">
        <img className="ms-auto me-auto" style={{width:"150px",marginTop:"20px"}} src="Sun PNG - Free Download-Photoroom (1).jpg"/>
          <h1 style={{ color: "#6F848C", marginTop: "5vh" }} className="text-center fade "> Hello world !</h1>
        
          <p style={{ fontSize: "18px", color: "#6F848C" }} className="  w-50 mt-4 fade ms-auto me-auto ">Me chamo Isaias e gostaria que você
          enxergasse
            o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>
          <a href="https://drive.google.com/file/d/1IKLGIUwCZTcSwgU5HRqQz_VP95eqVAC4/view?usp=drive_link" className="fade   btn btn-primary ms-auto me-auto text-white " >currículo</a>
         
        </main>
      
      </div>

      <div className="  d-md-none mobile d-flex flex-column   ">

        <main style={{ height: "95vh", backgroundColor: "#01011A", backgroundRepeat:"no-repeat", backgroundSize:"100vh", backgroundImage:"url('https://i.ibb.co/HLC6rDTz/planet-earth-1457453-1280-Photoroom.jpg')", backgroundPositionY:"100%", backgroundPositionX:"50%" }} className=" text-center"  >
        <img className="ms-auto me-auto" style={{width:"150px",marginTop:"20px"}} src="Sun PNG - Free Download-Photoroom (1).jpg"/>
          <h1 className="fade" style={{ color: "#6F848C", marginTop: "10vh" }} > Hello world !</h1>
          <p style={{ fontSize: "18px", color: " #6F848C " }} className="fade mt-5 ">Me chamo isaias e gostaria que voce enchergasse
            o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>
            <a href="https://drive.google.com/file/d/1IKLGIUwCZTcSwgU5HRqQz_VP95eqVAC4/view?usp=drive_link" className="fade   btn btn-primary ms-auto me-auto text-white " >currículo</a>

        </main>


      </div>



    </>
  )
}

export default Body
