import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledMenu = styled.div`
	height: 90vh;
	position: absolute;
	width: 25vw;
	top: 0;
	right: 0;
	transform: translateX(25vw);
	transition: transform 0.1s ease-in-out;
	display: none;
	flex-direction: column;

	&.menu--active {
		transform: translateX(0);
		display: flex;
	}
	@media (min-width: 425px) and (max-width: 768px) {
		transform: translateX(30vw);
		width: 30vw;
	}
	@media (max-width: 1024px) {
		width: 80vw;
		transform: translateX(80vw);
		top: 20vh;
	}
`;

const Navigation = styled.nav`
	margin: 0.5rem 2rem auto auto;
	text-align: right;

	ul {
		width: 100%;
		list-style: none;
		li {
			a {
				font-size: 2rem;
				line-height: 4rem;
				color: black;
				text-decoration: none;
			}
		}
	}

	@media (max-width: 1024px) {
		margin: 0.5rem 2rem 2rem auto;
	}

	@media (min-width: 1440px) {
		margin: 7% auto;
	}
`;
const Info = styled.div`
	margin: auto 2rem 1rem auto;

	@media (max-width: 1024px) {
		margin: 0 2rem auto auto;

		p,
		a {
			text-align: right;
		}
	}

	p,
	a {
		font-family: "Segoe UI", sans-serif;
		font-size: 0.9rem;
		text-decoration: black;
		color: black;
	}
`;
export const Menu = React.forwardRef((props, ref) => {
	return (
		<StyledMenu ref={ref}>
			<Navigation>
				<ul>
					<li>
						<Link to={'/'}>Strona Główna</Link>
					</li>
					<li>
						<Link to={'/domy/'}>Domy</Link>
					</li>
					<li>
						<Link to={'/schody/'}>Schody</Link>
					</li>
				</ul>
			</Navigation>
			<Info>
				<p>Łódź</p>
				<a href='tel:534713246'> +48 534 713 246</a>
			</Info>
		</StyledMenu>
	);
});
