import styled from 'styled-components';

const Gameover = ({
	setLevel,
	setPokemonList,
	setCurrentPokemon,
	setClickedCards,
	setGameover,
	score,
}) => {
	const reset = () => {
		setLevel(1);
		setCurrentPokemon([]);
		setPokemonList([]);
		setClickedCards([]);
		setGameover(false);
		window.location.reload();
	};

	return (
		<StyledGameover>
			<h1>GAMEOVER</h1>
			<p>Score: {score}</p>
			<button onClick={reset}>NEW GAME</button>
		</StyledGameover>
	);
};

const StyledGameover = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	letter-spacing: 0.6rem;
	font-size: 2rem;
	background-color: black;
	color: white;
	padding-bottom: 10rem;
	gap: 0.5rem;

	button {
		background-color: black;
		color: white;
		border: 2px solid white;
		padding: 1rem 2rem;
		margin-top: 1.5rem;
		font-size: 1.5ch;
		transition: 0.15s all ease-in-out;

		&:hover {
			border: 2px solid yellow;
			cursor: pointer;
			color: yellow;
			transform: translateY(-2.5%);
		}
	}

	h1 {
		padding-bottom: 0.5rem;
	}

	p {
		color: yellow;
	}
`;

export default Gameover;
