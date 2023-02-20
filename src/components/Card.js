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
	setLevelCompleted,
	setGameover,
	shuffleCards,
}) => {
	const handleClick = (name) => {
		if (!clickedCards.includes(name)) {
			setClickedCards([...clickedCards, name]);

			if (clickedCards.length + 1 === currentPokemon.length) {
				setLevelCompleted(true);
			}
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
	transition: 0.25s all ease-in-out;

	&:hover {
		cursor: pointer;
		border: 2px solid yellow;
		transform: translateY(-2.5%);
	}

	span {
		margin-top: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		letter-spacing: 0.1rem;
		border-top: 2px solid #5a5a5a;
	}

	img {
		height: 100%;
	}
`;

export default Card;
