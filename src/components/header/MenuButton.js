import React, { createRef } from 'react';
import styled from 'styled-components';

const StyledMenuButton = styled.button`
	background: transparent;
	border: none;
	width: 30px;
	height: 24px;
	padding: 0;
	position: relative;
	cursor: pointer;
	margin: 2px 0 0 3%;
	overflow: visible;

	@media (max-width: 320px) {
		margin-top: 4%;
	}
`;

const MenuButtonInner = styled.div`
	width: 100%;
	height: 100%;
	border-bottom: 2px solid black;
	position: relative;
	display: flex;
	transition: transform 0.1s ease-in-out;

	::before {
		content: "";
		width: 20px;
		position: absolute;
		margin: 15px 0 auto 10px;
		height: 2px;
		background-color: black;
	}

	::after {
		content: "";
		width: 10px;
		position: absolute;
		margin: 5px 0 auto 20px;
		height: 2px;
		background-color: black;
	}

	&.menu--active {
		::before {
			transform: translateX(-10px);
		}
		::after {
			transform: translateX(-20px);
		}
	}
`;

const MenuButton = ({ onClick }) => {
	const innerRef = createRef();

	const handleClick = () => {
		onClick();
		innerRef.current.classList.toggle('menu--active');
	};

	return (
		<StyledMenuButton onClick={handleClick}>
			<MenuButtonInner ref={innerRef} />
		</StyledMenuButton>
	);
};

export default MenuButton;
