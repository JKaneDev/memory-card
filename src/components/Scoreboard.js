import styled from 'styled-components';

const Scoreboard = ({ score }) => {
	return (
		<StyledScoreboard>
			<span>Score: {score || 0}</span>
		</StyledScoreboard>
	);
};

export default Scoreboard;

const StyledScoreboard = styled.div`
	background-color: inherit;
	font-size: 3ch;
	margin-left: auto;
	margin-right: 3rem;
	color: white;
	letter-spacing: 0.2rem;
	font-weight: bold;

	span:nth-of-type(1) {
		color: green;
	}
`;
