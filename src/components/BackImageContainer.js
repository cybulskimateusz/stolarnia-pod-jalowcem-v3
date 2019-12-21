import styled from 'styled-components';

export const BackImageContainer = styled.div`
	width: 37.5%;
	height: 100vh;
	overflow: hidden;
	transition: transform 0.1s ease-in-out;

	img {
		height: 107vh;
		margin: -7% auto 0 -400%;

		@media (min-width: 425px) {
			margin: -7% auto 0 -40%;
		}
	}

	&.menu--active {
		transform: translateY(12vh);

		@media (min-width: 425px) and (max-width: 768px) {
			transform: translateY(20vh);
		}
	}

	@media (min-width: 1440px) {
		width: 37.5%;
	}

	@media (orientation: portrait) {
		&.menu--active {
			transform: none;
		}
		transition: none;
	}

	@media (max-width: 320px) {
		margin-top: 40%;
	}

	@media (min-width: 375px) and (max-width: 425px) {
		margin-top: 20%;
	}
`;
