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
			<div>
				{pokemonList && pokemonList[level - 1] ? (
					pokemonList[level - 1].map((pokemon) => (
						<Card
							name={pokemon.name}
							image={pokemon.imageURL}
							key={pokemon.id}
						/>
					))
				) : (
					<p>Loading Pokémon...</p>
				)}
			</div>
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
