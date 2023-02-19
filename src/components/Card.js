import { useEffect } from 'react';
import styled from 'styled-components';

const Card = ({
	name,
	image,
	currentPokemon,
	setCurrentPokemon,
	clickedCards,
	setClickedCards,
	score,
	setScore,
	setGameover,
	shuffleCards,
}) => {
	const handleClick = (name) => {
		// console.log(clickedCards);
		if (!clickedCards.includes(name)) {
			setClickedCards([...clickedCards, name]);
		} else {
			setScore(score + 1);
			setGameover(true);
		}
	};

	return (
		<StyledCard onClick={() => handleClick(name)}>
			<img src={image} alt={name}></img>
			<span>{name}</span>
		</StyledCard>
	);
};

const StyledCard = styled.div`
	background-color: grey;
	min-height: 220px;
	min-width: 180px;
	display: flex;
	flex-direction: column;
	border-radius: 4px;

	span {
		margin-top: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		letter-spacing: 0.1rem;
		border-top: 2px solid #fff;
	}

	img {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		padding: 0.5rem;
	}
`;

export default Card;
