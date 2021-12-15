import logoEngenharia from "../img/logoEngenharia.svg"
import '../styles/footer.scss'

export function Footer(){
    return(
        <>
        <footer>
            <div className="logo-footer">
                <div>
                    <img id="logo" src={logoEngenharia} alt="Logo marca da Barros &amp; Araujo Engenharia"/>
                </div>
            </div>
            <div className="info">
                <div>
                    <h3>Informações:</h3>
                    <br/>
                    <p>81 1 2345-6789</p>
                    <p>email@gmail.com</p>
                    <p>Rua 10, nº123, Boa Viagem - PE, CEP: 12345-789</p>
                </div>
            </div>
            <div className="rede-social">
                <div>
                    media social
                </div>
            </div>
        </footer>
        </>
    )
}