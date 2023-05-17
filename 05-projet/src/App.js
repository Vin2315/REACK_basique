import  Liste  from "./components/Liste.js";
import Chercheur from "./components/Chercheur.js";
import Ayoute from "./components/Ayoute.js";



function App() {
  return (
        
        
    <div className="layout">
    

        {/* {/*Cabecera*/} 
      <header className="header">
          <div className="logo">
              <div className="play"></div>
          </div>
          <h1>Mes cours de Français </h1>
      </header>

        {/*Barra de navegación*/}
        <nav className="nav">
          <ul>
              <li><a href="/#">Accueil</a></li>
              <li><a href="/#">Films</a></li>
              <li><a href="/#">Blog</a></li>
              <li><a href="/#">Contact</a></li>
          </ul>
      </nav>
      
      
      {/*Contenu de mes Films*/}
      <section id="content" className="content">

          {/*detaille lista de Mes Films*/}
            
            <Liste></Liste>    

      </section>

        {/*Barra lateral*/}
        <aside className="lateral">
        
            <Chercheur></Chercheur> 
    
            <Ayoute></Ayoute>
 
        </aside>

        {/*Pie de página*/}
        <footer className="footer">
          &copy; Máster en React - <a href="https://mondevirtuel.com">mondevirtuel.com</a>
      </footer>



    </div>


  );
}

export default App;
