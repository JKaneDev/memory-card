import styled from 'styled-components';
import Prompt from './Prompt';

const Game = () => {
	return (
		<StyledGame>
			<Prompt />
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
