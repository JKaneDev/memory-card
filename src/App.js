import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import { getRandomPokemon } from './components/utils/Pokedex';

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [pokemonList, setPokemonList] = useState([]);
	const [level, setLevel] = useState(0);

	useEffect(() => {
		const fetchInitialPokemon = async () => {
			const initialPokemon = await getRandomPokemon(4);
			setPokemonList(initialPokemon);
		};
		fetchInitialPokemon();
		console.log(pokemonList);
	}, []);

	return (
		<>
			<Header />
			{/* <Game
				pokemonList={pokemonList}
				setPokemonList={setPokemonList}
				level={level}
			/> */}
		</>
	);
}

export default App;
