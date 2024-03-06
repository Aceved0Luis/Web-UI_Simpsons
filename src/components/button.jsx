export function Boton({texto,clase, click= undefined}){   
    return(
        <button onClick={click} className={clase}>{texto}</button>
    )
}