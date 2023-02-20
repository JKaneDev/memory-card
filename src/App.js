import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import { getRandomPokemon } from './components/utils/Pokedex';

function App() {
	const [pokemonList, setPokemonList] = useState([]);
	const [currentPokemon, setCurrentPokemon] = useState([]);
	const [level, setLevel] = useState(1);
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [clickedCards, setClickedCards] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [levelCompleted, setLevelCompleted] = useState(false);
	const [gameover, setGameover] = useState(false);

	const createNewLevel = async () => {
		setLevelCompleted(false);
		const newPokeListSize = 4 + level + 2;
		setIsLoading(true);
		const newPokemon = await getRandomPokemon(newPokeListSize);
		setCurrentPokemon(newPokemon);
		setPokemonList([...pokemonList, newPokemon]);
		setIsLoading(false);
	};

	return (
		<>
			<Header score={score} bestScore={bestScore} />
			<Game
				level={level}
				setLevel={setLevel}
				createNewLevel={createNewLevel}
				pokemonList={pokemonList}
				setPokemonList={setPokemonList}
				score={score}
				setScore={setScore}
				isLoading={isLoading}
				setIsLoading={setIsLoading}
				currentPokemon={currentPokemon}
				setCurrentPokemon={setCurrentPokemon}
				clickedCards={clickedCards}
				setClickedCards={setClickedCards}
				levelCompleted={levelCompleted}
				setLevelCompleted={setLevelCompleted}
				bestScore={bestScore}
				setBestScore={setBestScore}
				gameover={gameover}
				setGameover={setGameover}
			/>
		</>
	);
}

export default App;
