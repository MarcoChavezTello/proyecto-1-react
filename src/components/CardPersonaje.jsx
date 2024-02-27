export const CardPersonaje = (props) => {

    const {nombre,edad,aldea,rango,jutsu_destacado,estado,imagen} = props
    return(
        <div className="card-personaje">
            <img src={`/img/${imagen}`} alt="Personajes" />
            <h2>{nombre}</h2>
            <p>Edad: {edad}</p>
            <p>Aldea: {aldea}</p>
            <p>Rango: {rango}</p>
            <p>Jutsu: {jutsu_destacado}</p>
            <p className={`${estado === "Vivo" ? "live":"dead"}`}>Estado: {estado}</p>
        </div>
    )
}