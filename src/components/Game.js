import styled from 'styled-components';
import Prompt from './Prompt';
import Card from './Card';
import { useEffect } from 'react';

const Game = ({
	level,
	pokemonList,
	createNewLevel,
	currentPokemon,
	setCurrentPokemon,
	score,
	setScore,
	clickedCards,
	setClickedCards,
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

	// re-render cards to different positions
	useEffect(() => {
		setCurrentPokemon(shuffleCards(currentPokemon));
	}, [currentPokemon, clickedCards]);

	useEffect(() => {
		console.log(currentPokemon);
	}, [clickedCards]);

	return (
		<StyledGame>
			<Prompt level={level} />
			<StyledGameWrapper>
				{pokemonList && pokemonList[level - 1] ? (
					pokemonList[level - 1].map((pokemon) => (
						<Card
							// onClick={() => shuffleCards(pokemonList[level - 1])}
							name={pokemon.name.toUpperCase()}
							image={pokemon.imageUrl}
							key={pokemon.id}
							currentPokemon={currentPokemon}
							setCurrentPokemon={setCurrentPokemon}
							score={score}
							setScore={setScore}
							clickedCards={clickedCards}
							setClickedCards={setClickedCards}
							setGameover={setGameover}
							shuffleCards={shuffleCards}
						/>
					))
				) : (
					<p>Loading Pokémon...</p>
				)}
			</StyledGameWrapper>
		</StyledGame>
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
