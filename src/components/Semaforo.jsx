import {useState} from "react";

const Semaforo = ({ timeoutReached, combatEnded, setCombatEnded,  setResetTimer }) => {

    const Pokemons = {  
        Bulbasaur: {
            color: "mediumseagreen",
            attacks: [
                { name: "Látigo cepa", color: "green" },
                { name: "Drenadoras", color: "limegreen" },
                { name: "Rayo Solar", color: "gold" }, 
                { name: "Placaje", color: "gray" },
            ],
        },

        Charmander: {
            color: "tomato",
            attacks: [
                { name: "Ascuas", color: "orangered" },
                { name: "Llamarada", color: "red" },
                { name: "Arañazo", color: "gray" }, 
                { name: "Giro Fuego", color: "tomato" },
            ],
        },

        Squirtle: {
            color: "dodgerblue",
            attacks: [
                { name: "Pistola Agua", color: "dodgerblue"},
                { name: "Burbuja", color: "lightblue" },
                { name: "Hidrobomba", color: "blue" },
                { name: "Placaje", color: "gray" },
            ],
        },

        Pikachu: {
            color: "gold",
            attacks: [
                { name: "Impactrueno", color: "yellow" },
                { name: "Rayo", color: "gold" },
                { name: "Gruñido", color: "gray" },
                { name: "Ataque Rápido", color: "orange" },
            ],
        },
    }; 
    
    const [selectedPokemon, setSelectedPokemon] = useState(null); 
    const [selectedAttack, setSelectedAttack] = useState(null); 

    const handlePokemonSelect = (name) => {
        if (selectedPokemon || combatEnded) return; 
        setSelectedPokemon(name); 
        setSelectedAttack(null);
    }; 

    const handleAttackSelect = (attackName) => {
        if (combatEnded || timeoutReached) return;
        setSelectedAttack(attackName); 
        setResetTimer(prev => !prev);
    }; 

    const handleEndCombat = () => {
        setCombatEnded(true); 
    };  

    const handleReset = () => {
        setSelectedPokemon(null);
        setSelectedAttack(null); 
        setCombatEnded(false);
    };

    return (
        <div className="container text-center p-5">
            <h1>Elige tu Pokémon</h1>
            <div className="d-flex justify-content-center gap-3 flex-wrap ">
                {Object.keys(Pokemons).map((name) => (
                    <button 
                    key={name}
                    onClick={() => handlePokemonSelect(name)}
                    className={`btn btn-outline fs-3 m-3 text-white border-dark ${selectedPokemon === name ? "active fw-bold" : ""}`}
                    disabled= {!!selectedPokemon}
                    style={{ backgroundColor: Pokemons[name].color }}
                    > {name} </button>
                ))}
            </div>

            {selectedPokemon && (
                <>
                    <h3 className="mt-4">Ataques de {selectedPokemon}</h3>
                    <div className="d-flex justify-content-center gap-2 flex-wrap mb-3">
                        {Pokemons[selectedPokemon].attacks.map((attack, index) => (
                            <button
                                key= {index}
                                className="btn attack-button"
                                disabled={timeoutReached ||  combatEnded}
                                onClick={() => handleAttackSelect(attack.name)}
                                style={{
                                    backgroundColor: attack.color,
                                    border: selectedAttack ===  attack.name ? "3px solid black" : "1px solid #ccc",}}
                            > {attack.name}</button>
                        ))}
                    </div>
                </>
            )}

            {selectedAttack && !combatEnded && (
                <div className="mb-3">
                    <p className="fs-5">
                        Has elegido: <strong>{selectedAttack}</strong>
                    </p>
                    <button className="btn btn-danger" onClick={handleEndCombat}>
                        Finalizar combate
                    </button>
                </div>
            )}

            {combatEnded &&  (
                <div className="alert alert-success  mt-4">
                    <h4>¡Combate finalizado!</h4>
                    <p>¡{selectedPokemon} y tú habéis ganado🎉!</p>
                    <button className="btn btn-secondary mt-2" onClick={handleReset}>
                        Reiniciar
                    </button>
                </div>
            )}
        </div>

    );
}; 

export default Semaforo; 