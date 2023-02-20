import styled from 'styled-components';

const Scoreboard = ({ score }) => {
	return (
		<StyledScoreboard>
			<span>Score: {score || 0}</span>|<span>Best: 0</span>
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
	letter-spacing: 0.1rem;

	span:nth-of-type(1) {
		color: white;
	}

	span:nth-of-type(2) {
		color: green;
	}
`;
