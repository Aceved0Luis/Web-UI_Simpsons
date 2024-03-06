import { Sound } from '../logic/sound.jsx'
import { Link } from 'react-router-dom'
import { Boton } from '../components/button.jsx'

export function Home(){
    return(
        <article className="portada">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg" alt="Logo-Simpson" className="name" />
            <img src="https://www.freepnglogos.com/uploads/simpsons-png/simpsons-cartoon-characters-png-5.png" alt="Familia Simpson" className="family" />
            <footer className="pie-login">
                <Sound />
                <Link to="frases">
                    <Boton texto={'Frases'} clase={'frases'} />
                </Link>
            </footer>
        </article>
    )
}