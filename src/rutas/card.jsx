export function card(nombre,mensaje,imagen){

    return(
        <article key={nombre} className="frase">
            <div className="frase-todo">
                <div className="frase-texto">{mensaje}</div>
                <div className="frase-imagen"><img className="frase-perso" alt={nombre} src={imagen} /></div>
            </div>
            <strong className="nombre">{nombre}</strong>
        </article>
    )
}