import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import { getRandomPokemon } from './components/utils/Pokedex';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [pokemonList, setPokemonList] = useState([]);
	const [level, setLevel] = useState(1);
	const [score, setScore] = useState(0);
	const [clickedCards, setClickedCards] = useState([]);
	const [gameover, setGameover] = useState(false);

	const createNewLevel = async () => {
		const newPokeListSize = 4 + level * 2;
		const newPokemon = await getRandomPokemon(newPokeListSize);
		setPokemonList([...pokemonList, newPokemon]);
	};

	useEffect(() => {
		const fetchInitialPokemon = async () => {
			const initialPokemon = await getRandomPokemon(4);
			setPokemonList([initialPokemon]);
			setIsLoading(false);
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
				isLoading={isLoading}
				setIsLoading={setIsLoading}
				score={score}
				setScore={setScore}
				clickedCards={clickedCards}
				setClickedCards={setClickedCards}
				gameover={gameover}
				setGameover={setGameover}
			/>
		</>
	);
}

export default App;
