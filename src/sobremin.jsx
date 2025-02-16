import Header from "./hearder";
function Sobremim() {
  return (
    <> 
    <Header/>
    <div style={{
      position: "relative", display: "flex", flexDirection: "column",  backgroundColor: "#01011A", backgroundSize: "cover", minHeight: "95vh"}}>
      <main style={{ marginTop: "5vh" }} className="d-flex flex-column flex-md-row  faderight  container">
      
          <div className="text-center fadephoto"> 
        <p className=" mt-md-0 "  style={{ fontSize: "20px",color:"#6F848C"}}>
          Hello world! Meu nome é Isaías Caetano de Oliveira e a tecnologia faz parte da minha vida desde a infância. Sempre gostei de entender como os computadores funcionam. Em 2022, tive a oportunidade de ingressar em um curso universitário no qual me identifiquei bastante com o desenvolvimento front-end. A forma como as páginas interagem com o usuário, as cores, os layouts... tudo isso chamou minha atenção e eu me apaixonei por essa área. Sou um jovem que não mede esforços para encontrar soluções para os meus problemas.
          Também tenho alguns hobbies, como a música. Toco alguns instrumentos musicais e sou apaixonado pela língua inglesa, um idioma que tem me ajudado bastante nos meus estudos e na comunicação com o mundo.
       </p>
       
       </div>
      </main>
      
    </div>
    </>
  );
}

export default Sobremim;
