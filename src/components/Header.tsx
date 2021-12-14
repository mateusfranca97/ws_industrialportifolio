import '../styles/home.scss'
import '../scripts/header.js'
import logoEngenharia from "../img/logoEngenharia.svg"

export function Header(){
    return(
        <div>
            <header className="main-nav">
                <img id="logo" src={logoEngenharia} alt="Logo marca da Barros &amp; Araujo Engenharia"/>
                <nav>
                    <ul>
                        <li><a href="#">Inicio</a> </li>
                        <li><a>Sobre</a></li>
                        <li><a>Empreendimentos</a></li>
                        <li><a>Contato</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}