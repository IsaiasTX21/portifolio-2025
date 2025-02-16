import Header from "./hearder"

function Body() {


  return (
    <>

      <div className=" d-md-flex desk  ">

        <main style={{ height: "100vh", backgroundColor: "black" }} className=" d-flex flex-column text-center  col-md-8    ">
          <Header />
          <h1  style={{ color:"#6F848C" }} className="text-center mt-2  mt-4 fade "> Hello world !</h1>
          <p style={{ fontSize: "18px" ,color:"#6F848C" }} className=" w-50 mt-4 fade ms-auto me-auto ">Me chamo Isaias e gostaria que voce enxergasse
            o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>
          <a  href="https://drive.google.com/file/d/1IKLGIUwCZTcSwgU5HRqQz_VP95eqVAC4/view?usp=drive_link" className="fade btn btn-primary ms-auto me-auto mt-4  text-white " >currículo</a>
        </main>


        <div   style={{ backgroundImage: "url('https://i.ibb.co/7J2skrVw/6757736-3397562.jpg)", backgroundSize: "cover", height:"100vh"}} className="col-4"></div>
      </div>

      <div className="  d-md-none mobile d-flex flex-column   ">

        <main   style={{ backgroundImage: "url('https://i.ibb.co/7J2skrVw/6757736-3397562.jpg')", backgroundSize: "cover", height:"100vh"}} className="text-center"  >
          <Header />
    
          <h1 style={{ color:"#6F848C" }}  className=" mt-5  text-center "> Hello world !</h1>
          <p style={{ fontSize: "18px", color:" #6F848C "}} className=" mt-5 text-center ms-auto me-auto  ">Me chamo isaias e gostaria que voce enchergasse
            o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>
      <a style={{position:"relative", top:"5vh"}} href="https://drive.google.com/file/d/1IKLGIUwCZTcSwgU5HRqQz_VP95eqVAC4/view?usp=drive_link" className=" btn btn-primary  text-white " >currículo</a>         
      
        </main>

       
      </div>



    </>
  )
}

export default Body
