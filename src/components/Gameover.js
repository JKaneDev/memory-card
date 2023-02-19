import styled from 'styled-components';

const Gameover = () => {
	const refresh = () => {
		window.location.reload();
	};

	return (
		<StyledGameover>
			<h1>GAMEOVER</h1>
			<button onClick={refresh}>New Game</button>
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
`;

export default Gameover;
