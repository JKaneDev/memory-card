import React, { useState } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import { getRandomPokemon } from './components/utils/Pokedex';

function App() {
	const [level, setLevel] = useState(1);
	const [pokemon, setPokemonList] = useState([]);

	const createLevel = async (quantity) => {
		const newPokemonList = await getRandomPokemon(quantity);
		setPokemonList([...pokemon, ...newPokemonList]);
	};

	return (
		<>
			<Header />
			<Game />
		</>
	);
}

export default App;
