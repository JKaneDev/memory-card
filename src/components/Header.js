import React from 'react';
import Scoreboard from './Scoreboard';
import abra from '../assets/abra.png';
import styled from 'styled-components';

const Header = ({ score }) => {
	return (
		<StyledHeader>
			<div>
				<img src={abra} alt='title-img' id='title-img'></img>
				<h1>Gotta Click 'em all</h1>
			</div>
			<Scoreboard score={score} />
		</StyledHeader>
	);
};

const StyledHeader = styled.div`
	display: flex;
	background-color: black;
	padding: 1.5rem 1rem;
	border-bottom: 2px solid yellow;

	img {
		height: 42px;
		width: 56px;
	}

	h1 {
		color: white;
		letter-spacing: 0.1rem;
	}

	div {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
`;

export default Header;
