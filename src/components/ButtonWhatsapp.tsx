import iconWhatsapp from "../img/whatsapp.png"
import '../styles/buttonwhatsapp.scss'

export function ButtonWhatsapp(){
    return(
        <button id="whatsapp-button">
            <p>Mensagem via Whatsapp</p>
            <img className="icon-whatsapp" alt="Teclado" src={iconWhatsapp} />
        </button>
    )
}