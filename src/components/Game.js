import styled from 'styled-components';
import Prompt from './Prompt';
import Card from './Card';
import { useEffect } from 'react';
import { getRandomPokemon } from './utils/Pokedex';

const Game = ({ level, pokemonList, createNewLevel }) => {
	// render cards for first level
	useEffect(() => {
		console.log(pokemonList[level - 1]);
	}, [pokemonList]);

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
							image={pokemon.imageURL}
							key={pokemon.id}
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
`;

const StyledGameWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 2rem;
	padding: 0.5rem 2rem 3rem 2rem;
`;
