import styled from 'styled-components';

const Scoreboard = () => {
	return (
		<StyledScoreboard>
			<span>Score: 0</span>|<span>Best: 0</span>
		</StyledScoreboard>
	);
};

export default Scoreboard;

const StyledScoreboard = styled.div`
	background-color: inherit;
	font-size: 2.5ch;
	margin-left: auto;
	margin-right: 3rem;
	color: white;

	span:nth-of-type(1) {
		color: white;
	}

	span:nth-of-type(2) {
		color: green;
	}
`;
