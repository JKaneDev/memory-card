import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import { getRandomPokemon } from './components/utils/Pokedex';

function App() {
	const [pokemonList, setPokemonList] = useState([]);
	const [currentPokemon, setCurrentPokemon] = useState([]);
	const [level, setLevel] = useState(1);
	const [score, setScore] = useState(0);
	const [clickedCards, setClickedCards] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [gameover, setGameover] = useState(false);

	const createNewLevel = async () => {
		const newPokeListSize = 4 + level * 2;
		const newPokemon = await getRandomPokemon(newPokeListSize);
		setCurrentPokemon([newPokemon]);
		setPokemonList([...pokemonList, newPokemon]);
	};

	useEffect(() => {
		const fetchInitialPokemon = async () => {
			const initialPokemon = await getRandomPokemon(4);
			setCurrentPokemon(initialPokemon);
			setPokemonList([initialPokemon]);
			setIsLoading(false);
		};
		fetchInitialPokemon();
	}, []);

	useEffect(() => {
		console.log(currentPokemon);
	}, [currentPokemon]);

	return (
		<>
			<Header />
			<Game
				level={level}
				pokemonList={pokemonList}
				score={score}
				setScore={setScore}
				currentPokemon={currentPokemon}
				setCurrentPokemon={setCurrentPokemon}
				clickedCards={clickedCards}
				setClickedCards={setClickedCards}
				setGameover={setGameover}
			/>
		</>
	);
}

export default App;
