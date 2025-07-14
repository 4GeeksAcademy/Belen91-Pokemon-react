import React, {useState} from "react";
import Jumbotron from "../components/Jumbotron";
import MapList from "../components/MapList";


const MapPage = () => {

    return (
        <React.Fragment> 
            <div className="container">
                <Jumbotron tittle= "¡Comienza tu aventura!" 
                    text= "Ahora vamos a especificar qué ruta seguiremos para visitar los distintos pueblos Pokémon y adquirir bayas y otros elementos esenciales para ti y tus Pokémon. Tienes que elegir los pueblos de entre los especificados en el mapa, que no podrán superar los 20 min de ruta TOTAL.  " 
                    button= "¿Qué ruta quieres seguir?"/>
                
                <section className= "bg-success text-white p-5 rounded-3 shadow-lg text-center m-3">
                    <MapList/>
                </section>
            </div>
        </React.Fragment>
    );
};

export default MapPage;