import Header from "./hearder"
import lua from "../src/asserts/lua.png"


function Body() {


  return (
    <>
      <Header />

      <div className="  d-lg-flex    desk flex-column   ">

        <main style={{ minHeight: "95dvh", backgroundColor: "#010119", backgroundRepeat: "no-repeat", backgroundSize: "95vh", backgroundImage: "url('https://i.ibb.co/HLC6rDTz/planet-earth-1457453-1280-Photoroom.jpg')", backgroundPositionY: "105%", backgroundPositionX: "50%" }} className="  d-flex flex-column text-center      ">

          <img id="lua" className=" ms-auto me-auto mt-4 d-md-block" style={{ width: "220px" }} src={lua} />

          
          <h1 style={{ color: "#6F848C" }} className="text-center  fade mt-5 "> Hello world !</h1>
          <p style={{ fontSize: "18px", color: "#6F848C" }} className=" mt-3 w-75  fade ms-auto me-auto ">Me chamo Isaias e gostaria que você
            enxergasse o meu mundo como eu vejo. </p>

          
          <a  id="resume"  href="https://drive.google.com/file/d/1IKLGIUwCZTcSwgU5HRqQz_VP95eqVAC4/view?usp=drive_link" className=" fade btn-primary mt-3 btn text-white ms-auto me-auto   " >currículo</a>
        </main>

      </div>

   



    </>
  )
}

export default Body
