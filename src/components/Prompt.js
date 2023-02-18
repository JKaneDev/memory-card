import styled from 'styled-components';

const Prompt = ({ level }) => {
	return (
		<StyledPrompt>
			<p>Level: {level} | Choose Next Pokemon!</p>
		</StyledPrompt>
	);
};

const StyledPrompt = styled.div`
	padding: 1.5rem 0;
	letter-spacing: 0.1rem;
	font-size: 2.5ch;

	p {
		color: white;
	}
`;
export default Prompt;
