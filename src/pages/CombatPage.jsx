import React, {useState} from "react";
import Jumbotron from "../components/Jumbotron";
import SecondsCounter from "../components/Contador";
import Semaforo from "../components/Semaforo";


const CombatPage = () => {
    const [timeoutReached, setTimeoutReached] = useState(false);
    const [combatEnded, setCombatEnded] = useState(false);
    const  [resetTimer, setResetTimer] = useState(false);

    const handleTimeout = () => {
        setTimeoutReached(true);
        setCombatEnded(true);

        setTimeout(() => {
            setTimeoutReached(false);
            setCombatEnded(false);
        }, 3000);
  };

    return (
        <React.Fragment> 
            <div className="container">
                <Jumbotron tittle= "¡Es la hora de entrenar a tu Pokémon!" 
                    text= "En esta emocionante fase del juego, cada combate se lleva a cabo en tiempo real. ¡Tienes 30 segundos por turno para tomar una decisión estratégica y elegir el ataque adecuado! ¡cada segundo cuenta! Planifica bien tu jugada y haz que tu Pokémon brille en la batalla. " 
                    button= "¡Comienza el combate!"/>
                
                <section className= "bg-danger text-white p-5 rounded-3 shadow-lg text-center m-3">
                    <SecondsCounter  
                    onTimeout = {handleTimeout}
                    resetTrigger = {resetTimer}
                    />
                    
                    <Semaforo
                    timeoutReached = {timeoutReached}
                    combatEnded = {combatEnded}
                    setCombatEnded = {setCombatEnded}
                    setResetTimer={setResetTimer}
                    />
                    
                    {timeoutReached && (
                        <div className="alert alert-danger mt-3 fs-4">
                        ⏰ ¡Has perdido el combate por superar el tiempo!
                        </div>
                    )}
                </section>
            </div>
        </React.Fragment>
    );
};

export default CombatPage;