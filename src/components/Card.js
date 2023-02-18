import { useEffect } from 'react';
import styled from 'styled-components';

const Card = ({ name, imageURL }) => {
	return (
		<StyledCard>
			<div>
				<img src={imageURL} alt={name} id={name}></img>
			</div>
			<span>{name}</span>
		</StyledCard>
	);
};

const StyledCard = styled.div`
	background-color: grey;
	border: yellow;
	min-height: 220px;
	min-width: 180px;
	display: flex;
	flex-direction: column;

	span {
		margin-top: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		letter-spacing: 0.1rem;
		border-top: 2px solid yellow;
	}
`;

export default Card;
