import '../styles/header.scss'
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
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Empreendimentos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}