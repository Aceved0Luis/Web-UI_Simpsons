import { Suspense } from 'react';
import { fetchData } from '../logic/fetchData.jsx'
import { card } from './card.jsx';
import { Boton } from '../components/button.jsx';
import { Search } from '../components/barra-search.jsx';
import { Link } from 'react-router-dom';

const apiData = fetchData("https://thesimpsonsquoteapi.glitch.me/quotes?count=1");

export function Frases(){
    const data = apiData.read();

    return(
        <div className='test'>
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg" alt="Logo-Simpson" className="logo-frases" />
            </Link>
            <p className='titulo-frase'>Discover some Simpsons quotes</p>
            <Search />
            <Suspense fallback={<div>Loading...</div>}>
                {data ?.map((user)=> (
                    card(user.character, user.quote, user.image)
                ))}
            </Suspense>
            <Boton texto={'Show me more'} clase={'more'}/>
        </div>
    )
}