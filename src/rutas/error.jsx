import { Link } from 'react-router-dom';
import { Boton } from "../components/button"

export function Error(){
    return(
        <div className='error'>
            <h1>404</h1>
            <img src="../public/img/homero.png" alt="Error 404" />
            <Link to="/">
                <Boton texto={'Home'} clase={'btn-home'} />
            </Link>
        </div>
    )
}