import React from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";


const HomePage = () => {
	
	return (
		<React.Fragment> 
			<div className="container">
				<Jumbotron tittle= "¡Elige a tu primer Pokémon!" 
				text= "¡Espera! No es una decisión fácil, ¿verdad? Este será tu compañero hasta que lo mates o te lo maten.Tendrás que cuidarlo, entrenarlo y, a algunos, pagarles el cambio de sexo,  ¡pero viviréis juntos muchísimas aventuras! (y curas).Así que, toma un respiro, relájate y, sobre todo, ¡diviértete!" 
				button = "¿Ya tienes tu Pokémon? ¡Empieza tu aventura!"/>
				
				<section className= "row justify-content-center gap-4">
					<Card image= "src/assets/Bulbasaur.png" tittle="Bulbasaur" text="El Pokémon que ama las plantas, ¡y a ti también! Bulbasaur es el compañero perfecto para el entrenador que quiere empezar fuerte. Es tierno, amigable, y siempre está listo para lanzar un par de líneas de veneno." button="¡prepárate para ver cómo crece en una poderosa Venusaur!"/>
					<Card image= "src/assets/charmander.jpg" tittle="Charmander" text="Para los amantes de la acción y la aventura, Charmander es el fuego que enciende tu pasión. Tiene mucha energía y será tu mejor aliado en cada batalla. Si quieres ver a un Charizard de cerca sin quemarte las cejas."  button= " ¡Elige a Charmander, porque me sale del jigo!"/>
					<Card image= "src/assets/squirtle.jpg" tittle="Squirtle" text= "Si prefieres mantener las cosas frescas (literalmente), Squirtle es tu mejor amigo. Es ágil, divertido, y viene con gafas incluidas. Serás el más chulo de tu clase, (y sin fumar)." button="¡Elige a Blastoise, la única tortuga que no huele!"/>
					<Card image= "src/assets/pikachu.webp" tittle="Pikachu" text="¿Te echo un cable? Pikachu no solo es adorable, ¡es leal y con un poder increíble! Con su energía y su actitud optimista, Pikachu será tu aliado perfecto en esta aventura. Y además, tiene onlyfans" button="¡Con Pikachu a tu lado, la victoria está asegurada!"/>
				</section>
			</div>
		</React.Fragment>
	);
};

export default HomePage; 

