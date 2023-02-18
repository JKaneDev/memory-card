import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import { getRandomPokemon } from './components/utils/Pokedex';

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [pokemonList, setPokemonList] = useState([]);
	const [level, setLevel] = useState(1);

	const createNewLevel = async () => {
		const newPokeListSize = 4 + level * 2;
		const newPokemon = await getRandomPokemon(newPokeListSize);
		setPokemonList([...pokemonList, newPokemon]);
	};

	useEffect(() => {
		const fetchInitialPokemon = async () => {
			const initialPokemon = await getRandomPokemon(4);
			setPokemonList([initialPokemon]);
		};
		fetchInitialPokemon();
	}, []);

	return (
		<>
			<Header />
			<Game
				level={level}
				pokemonList={pokemonList}
				createNewLevel={createNewLevel}
			/>
		</>
	);
}

export default App;
