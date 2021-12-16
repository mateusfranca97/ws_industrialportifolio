import { Header } from "../components/Header"
import { ButtonWhatsapp } from "../components/ButtonWhatsapp"
import { Footer } from "../components/Footer"
import { Card } from "../components/Card"

import '../styles/main.scss'

export function Home(){
    return(
        <div>
            <Header/>
            <main>
                <img className="background-img" src="https://www.vojtechruzicka.com/static/d24ceaad89c616f9ef8dfca453e2786e/8e1fc/constructor-functions.jpg" alt="" />
                
                <div className="parent">
                </div> 
                <Card/>
                <ButtonWhatsapp/>
            </main>
            <Footer/>
        </div>
    )
}