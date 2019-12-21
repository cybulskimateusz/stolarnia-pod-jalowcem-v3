import styled from 'styled-components';

const Header = styled.div`
	position: absolute;
	top: 3%;
	right: 2%;
	display: flex;
	width: 60%;
	transition: transform 0.1s ease-in-out;

	&.menu--active {
		transform: translateX(-25vw);

		@media (min-width: 425px) and (max-width: 768px) {
			transform: translateX(-30vw);
		}
	}

	@media (min-width: 1024px) {
		width: 50%;
	}

	@media (min-width: 1440px) {
		top: 5%;
	}

	@media (orientation: portrait) {
		&.menu--active {
			transform: none;
		}
		width: 94vw;
		transition: none;
		top: 5%;
		right: 0;
		left: 1%;
	}
`;

export default Header;
