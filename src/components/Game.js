import styled from 'styled-components';
import Prompt from './Prompt';
import Card from './Card';
import { useEffect } from 'react';
import { getRandomPokemon } from './utils/Pokedex';

const Game = ({
	level,
	pokemonList,
	createNewLevel,
	isLoading,
	setIsLoading,
	score,
	setScore,
	clickedCards,
	setClickedCards,
	gameover,
	setGameover,
}) => {
	// render cards for level one
	useEffect(() => {
		if (level > 1) {
			createNewLevel();
		}
	}, [level]);

	return (
		<StyledGame>
			<Prompt level={level} />
			<StyledGameWrapper>
				{pokemonList && pokemonList[level - 1] ? (
					pokemonList[level - 1].map((pokemon) => (
						<Card
							name={pokemon.name.toUpperCase()}
							image={pokemon.imageUrl}
							id={pokemon.id}
							key={pokemon.id}
							isLoading={isLoading}
							setIsLoading={setIsLoading}
							score={score}
							setScore={setScore}
							clickedCards={clickedCards}
							setClickedCards={setClickedCards}
							gameover={gameover}
							setGameover={setGameover}
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
