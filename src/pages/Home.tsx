import '../styles/home.scss'
import { Header } from "../components/Header"
import { ButtonWhatsapp } from "../components/ButtonWhatsapp"
import { Footer } from "../components/Footer"

export function Home(){
    return(
        <div>
            <Header/>
            <main>
               
            
                <ButtonWhatsapp/>
            </main>
            <Footer/>
        </div>
    )
}