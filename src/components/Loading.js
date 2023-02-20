import RingLoader from 'react-spinners/RingLoader';
import styled from 'styled-components';

const Loading = () => {
	return (
		<StyledLoading>
			<RingLoader />
		</StyledLoading>
	);
};

const StyledLoading = styled.div`
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
`;

export default Loading;
