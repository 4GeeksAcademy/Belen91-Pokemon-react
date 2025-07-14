import {useState} from "react";

const MapList = () => {
   
   const validTowns = [
        "Meseta Añil",
        "Calle Victoria",
        "Ciudad Plateada",
        "Mansión Pokémon",
        "Ciudad Celeste",
        "Ciudad Azulona",
        "Bosque Verde",
        "Ciudad Verde",
        "Pueblo Paleta",
        "Puerto Carmín",
        "Zona Safari",
        "Cueva Digglet",
        "Pueblo Lavanda",
        "Cueva Celeste",
        "Monte Moon",
        "Isla Canela",
        "Ciudad Fucsia",
        "Islas Espuma",
        "Camino de Bicis",
        "Túnel Roca",
        "Central Energía",
        "Torre Pokémon",
        "Ciudad Carmín"
    ]; 

    const [input, setInput] = useState(""); 
    const [route, setRoute] = useState([]); 
    const [totalTime, setTotalTime] = useState(0); 
    const maxTime = 20; 
    

    const handleTown = () => {
        
        const townName = input.trim(); 
        const match = validTowns.find(
        (town) => town.toLowerCase() === townName.toLocaleLowerCase()
        );
            
        if (!match){
            alert("¡Pero dónde quieres ir! ¡Eso no es un pueblo ni está en el mapa!")
            return;
        }
    
    
        if (route.find((t) => t.name.toLowerCase() === match.toLowerCase())) {
            alert ("¿Otra vez? No te van a regalar nada por mucho que pases de nuevo, y menos con esa cara."); 
            return; 
        };

        const travelTime  = Math.floor(Math.random() *5) + 1;
            if (totalTime + travelTime > maxTime) {
                alert ("¡Onde vas chaval! Te vas a dejar los pies. "); 
                return; 
            }; 

        setRoute([...route, { name: townName, time: travelTime }]);
        setTotalTime(totalTime + travelTime);
        setInput("");
    };

    const handleRemoveTown = (name) => {
        const updateRoute  = route.filter((town) => town.name !== name); 
        const timeRemoved = route.find((town) => town.name ===  name) ?.time || 0; 
        setRoute(updateRoute); 
        setTotalTime(totalTime - timeRemoved); 
    }; 

    const handleSelectedRoute = () =>  {
        alert (`¡Ya tienes tu ruta! Visitarás ${route.length} pueblos en ${totalTime} minutos.`)
    }; 

    return (

        <div className="div-map">
            <img src="src/assets/MapaNombres.png" alt="mapa-pokemon" />
            <h2 className="mapTittle m-5">Escoge tu ruta:</h2>
            <input
                type="text"
                placeholder="Introduce un pueblo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleTown}>Añadir este lugar a mi ruta</button>
            
            <h3 className="routeTittle m-5" >Esta es tu ruta actual:</h3>
            <ul className="list-group mx-auto" style={{ maxWidth: "600px" }}>
                {route.map((town) => (
                <li key={town.name}
                className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    {town.name} – {town.time} min{" "}
                    <button onClick={() => handleRemoveTown(town.name)}>Eliminar</button>
                </li>
                ))}
            </ul>

            <p>Tiempo total: {totalTime} / {maxTime} minutos</p>

            {route.length > 0 && (
                <button onClick={handleSelectedRoute}>Aceptar Ruta</button>
            )}
        </div>
        );
}; 

export default MapList; 