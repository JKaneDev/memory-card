import styled from 'styled-components';
import Prompt from './Prompt';
import Card from './Card';
import Gameover from './Gameover';
import Loading from './Loading';
import { useEffect } from 'react';
import { getRandomPokemon } from './utils/Pokedex';

const Game = ({
	level,
	setLevel,
	pokemonList,
	setPokemonList,
	currentPokemon,
	setCurrentPokemon,
	createNewLevel,
	score,
	setScore,
	bestScore,
	setBestScore,
	clickedCards,
	setClickedCards,
	levelCompleted,
	setLevelCompleted,
	gameover,
	setGameover,
}) => {
	// shuffle current card display
	const shuffleCards = (currentPokemon) => {
		return currentPokemon.sort(() => Math.random() - 0.5);
	};

	// render cards for level one
	useEffect(() => {
		if (level > 1) {
			createNewLevel();
		}
	}, [level]);

	// render initial pokemon
	useEffect(() => {
		const fetchInitialPokemon = async () => {
			const initialPokemon = await getRandomPokemon(4);
			setCurrentPokemon(initialPokemon);
			setPokemonList([initialPokemon]);
		};
		fetchInitialPokemon();
	}, []);

	// re-render cards to different positions
	useEffect(() => {
		setCurrentPokemon(shuffleCards(currentPokemon));
	}, [currentPokemon, clickedCards]);

	return (
		<>
			{/* render cards if gameover is false and API call (loading) is finished (true) */}
			{gameover ? (
				<Gameover
					setLevel={setLevel}
					score={score}
					bestScore={bestScore}
					setBestScore={setBestScore}
					setPokemonList={setPokemonList}
					setCurrentPokemon={setCurrentPokemon}
					setClickedCards={setClickedCards}
					setGameover={setGameover}
				/>
			) : (
				<StyledGame>
					<Prompt level={level} />
					<StyledGameWrapper>
						{levelCompleted ? (
							pokemonList && pokemonList[level] ? (
								pokemonList[level].map((pokemon) => (
									<Card
										name={pokemon.name.toUpperCase()}
										image={pokemon.imageUrl}
										key={pokemon.id}
										currentPokemon={currentPokemon}
										setCurrentPokemon={setCurrentPokemon}
										level={level}
										setLevel={setLevel}
										levelCompleted={levelCompleted}
										setLevelCompleted={setLevelCompleted}
										score={score}
										setScore={setScore}
										clickedCards={[]}
										setClickedCards={setClickedCards}
										setGameover={setGameover}
									/>
								))
							) : (
								<p>Loading Pokémon...</p>
							)
						) : (
							currentPokemon.map((pokemon) => (
								<Card
									name={pokemon.name.toUpperCase()}
									image={pokemon.imageUrl}
									key={pokemon.id}
									currentPokemon={currentPokemon}
									setCurrentPokemon={setCurrentPokemon}
									level={level}
									setLevel={setLevel}
									levelCompleted={levelCompleted}
									setLevelCompleted={setLevelCompleted}
									score={score}
									setScore={setScore}
									clickedCards={clickedCards}
									setClickedCards={setClickedCards}
									setGameover={setGameover}
								/>
							))
						)}
					</StyledGameWrapper>
				</StyledGame>
			)}
		</>
	);
};

export default Game;

const StyledGame = styled.div`
	background-color: black;
	min-height: 100vh;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

const StyledGameWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	gap: 5rem;
	padding: 0.5rem 2rem 3rem 2rem;
`;
