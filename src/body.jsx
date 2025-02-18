import Header from "./hearder"

function Body() {


  return (
    <>
      <Header />

      <div className="  d-md-none d-lg-flex  desk flex-column   ">

        <main style={{ minHeight: "95vh", backgroundColor: "#01011A", backgroundRepeat: "no-repeat", backgroundSize: "95vh", backgroundImage: "url('https://i.ibb.co/HLC6rDTz/planet-earth-1457453-1280-Photoroom.jpg')", backgroundPositionY: "105%", backgroundPositionX: "50%" }} className=" d-flex flex-column text-center  col-md-12    ">

          <img className="ms-auto me-auto " style={{ width: "150px" }} src="https://i.ibb.co/sJ3M0C3m/Sun-PNG-Free-Download-Photoroom-1.jpg" />
          <h1 style={{ color: "#6F848C" }} className="text-center fade mt-3 "> Hello world !</h1>
          <p style={{ fontSize: "18px", color: "#6F848C" }} className=" mt-3 w-50  fade ms-auto me-auto ">Me chamo Isaias e gostaria que você
            enxergasse o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>

          <div className="d-flex justify-content-center">
            <a href="https://github.com/IsaiasTX21" className="me-1"><img className="fade" width="44" height="44" src="https://img.icons8.com/3d-fluency/94/github.png" alt="github" /></a>
            <a href="mailto:isaiascaetanodev@gmail.com" className="fade me-1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACv0lEQVR4nO2UT2jTYByG48F5c4ieJ47RBE0rbZItcT2VHYQWWoebx11ksEPPehC92YA35wSvnpyDVoUetNrmYGvRKiK7bG6oW77uIqOCcyVx/eSbjWY1af70r/C98N7Kr++TPC1B4ODg4ODg6FLyeE7kKepugSTLeZLcyZNkseDxTBNdzk+JnlYluqjk6B0l5y2rOfoOzFDHrceT5GqBoqBBl0rDw4OdHg4zzKAi0Uuq5IX/NEevNIXYf/LG47WuFSmK6dR4JetlVMm7Zjj+b+fNAUhyywIAtQp4Lt7u8YDn4orkrVqMh0qOBuYAFFWzAQCBwEGZ5x59CQaPtTr86+joUSBwD9BNq/G/Abw102N2xmsAdYjPm+OjvNvxgGcCQOA+avfsAKC2DaBeBQjcFUgQh5yMLwvsLOC5qv5WrwAcKaVXBjS0ZYD5iZn3bgHsKNWoDHAB8Doz9sYUYEgEcHJuUc3RZ6tuAJopZaQMcADwI+vbvZUOVSKpGGwKgBq49g7eD8b2XAIcUKqZMsAmwPrzQPXy4zBE420BoJ66uQGvXrxeM/prtTOmDrGOavfzqsH49NNxeCEV/TPeNoDWybnFmnTGt+sGwGlV3fDvWZ8ipicODHcFoCmVYkNb3QLYfOHf1ivTMoCmVCIcX0FKdRLg5TP+U6MybQHQOjuz8AEIXKUDAJWFJ6HlZsPbAoBaFvwnAc++atd4WeDebvD+ETvj2wKAPltimMMyz4qywLWklMxz91bPjxxBN7sKoAWcY6KAZ7edP3X2mzzGXtLf6gkAilOlNGWIhvQMwIlSemX6CsBKKSNl+hLASCkzZfoWAAVpIgvsbVQzZfoawE0iGEDEb6ClRLBCCQD6/kecjMmmB4ZEWex3gHAqmjA9cPrG8sA+hMWb6AVAOBkDkWRMnHo4NdCp78fBwcHBIf67/ALECpwyy5gUBAAAAABJRU5ErkJggg==" alt="gmail-new" /></a>
          </div>
          <a href="https://drive.google.com/file/d/1IKLGIUwCZTcSwgU5HRqQz_VP95eqVAC4/view?usp=drive_link" className=" fade mt-4 btn btn-primary ms-auto me-auto text-white " >currículo</a>
        </main>

      </div>

      <div className="  mobile d-lg-none d-flex flex-column   ">

        <main style={{ minHeight: "95vh", backgroundColor: "#01011A", backgroundRepeat: "no-repeat", backgroundSize: "95vh", backgroundImage: "url('https://i.ibb.co/HLC6rDTz/planet-earth-1457453-1280-Photoroom.jpg')", backgroundPositionY: "100%", backgroundPositionX: "50%" }} className=" text-center"  >

          <h1 className="fade" style={{ color: "#6F848C", marginTop: "7vh" }} > Hello world !</h1>
          <p style={{ fontSize: "18px", color: " #6F848C " }} className=" mt-5 ">Me chamo isaias e gostaria que voce enchergasse
            o meu mundo como eu vejo. Minha paixão por tecnologia faz meu coração acelerar e superar meus limites. </p>
          <a href="https://drive.google.com/file/d/1IKLGIUwCZTcSwgU5HRqQz_VP95eqVAC4/view?usp=drive_link" className="fade mt-4  btn btn-primary ms-auto me-auto text-white " >currículo</a>

        </main>


      </div>



    </>
  )
}

export default Body
