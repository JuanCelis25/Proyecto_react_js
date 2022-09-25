import "./header.css";
import logo from "./Hotelia-horizontal-blanco.svg"

function header() {
    return(
        <nav id="nav">
            <div className="logo" id="logo">
                  <img src={logo} alt="Logo"/>
                  <i className="fa-solid fa-bars" burg></i>
            </div>
            <div className="menu" id="menu">
                  <a href="index.html" className="item">Inicio</a>
                  <a href="#ubicacion" className="item">Ubícanos</a>
                  <a href="#opinion" className="item">Opiniones</a>
                  <a href="login.html" className="item">
                  <button><i className="fa-solid fa-user"></i>Iniciar Sesión</button></a>
            </div>
      </nav>
    );
}

export default header;