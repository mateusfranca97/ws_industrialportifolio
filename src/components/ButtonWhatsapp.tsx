import iconWhatsapp from "../img/whatsapp.png"

export function ButtonWhatsapp(){
    return(
        <button id="whatsapp-button">
            <p>Mensagem via Whatsapp</p>
            <img className="icon-whatsapp" alt="Teclado" src={iconWhatsapp} />
        </button>
    )
}