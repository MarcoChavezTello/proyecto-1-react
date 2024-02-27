import { Navbar } from "./components/Navbar"
import {personajes} from "./utils/personajesData"
import { CardPersonaje } from "./components/CardPersonaje"

export const Principal = () => {
    return (
        <section>
            <Navbar/>
        <article className="container">
            <h1>Primer Aplicativo en React: Marco Chavez</h1>
            <div className="contenedor-personajes">
            {
                personajes.map((personaje)=>(
                    <CardPersonaje key={personaje.nombre} {...personaje}
                    />
                ))
            }
            </div>
        </article>
        </section>
        
    )
}