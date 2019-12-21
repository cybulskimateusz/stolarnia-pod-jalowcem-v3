import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.a`
	font-family: 'Segoe UI', sans-serif;
	font-size: .9rem;
	text-decoration: none;
	text-align: right;
	position: absolute;
	bottom: 1%;
	right: 2%;
	color: black;
	cursor: pointer;
`;

export const Footer = () => (
	<StyledFooter href='https://cybulskimateusz.com'>Mateusz Cybulski ‭​​​​‭​​​​‭​​​​ ‭‭‭‭©</StyledFooter>
);
