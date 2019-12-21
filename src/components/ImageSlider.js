import React, { useState, useEffect, createRef } from 'react';
import styled from 'styled-components';

export const Slider = styled.div`
	position: absolute;
	top: 16%;
	left: 10%;
	transition: transform 0.1s ease-in-out;

	img {
		max-width: 100%;
		max-height: 100%;
	}

	&.menu--active {
		transform: translateX(7vw);
	}

	@media (max-width: 768px) {
		width: 60vw;
	}
	@media (min-width: 768px) {
		height: 73vh;
		left: 20%;
	}
	@media (min-width: 425px) and (max-width: 768px) {
		top: 25%;

		&.menu--active {
			transform: translateX(-10vw);
		}
	}

	@media (max-width: 1024px) {
		left: 2rem;
		width: 85vw;

		&.menu--active {
			transform: translateY(25vh);
		}
	}

	@media (max-width: 1024px) and (orientation: portrait) {
		top: 35%;
	}

	@media (min-width: 1440px) {
		left: 25%;
	}
`;

export const ImageSlider = React.forwardRef(({ imgList }, ref) => {
	const [ item, setItem ] = useState(0);
	const [ el, setEl ] = useState(imgList[0]);
	const [ hovered, setHovered ] = useState(false);
	const imgRef = createRef();

	useEffect(
		() => {
			setTimeout(() => {
				item < imgList.length - 1 ? setItem(item + 1) : setItem(0);
			}, 1000);
			if (!hovered) setEl(imgList[item]);
		},
		[ imgList, item, el, hovered ]
	);

	return (
		<Slider ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
			<img ref={imgRef} src={el} alt={'img_'} />
		</Slider>
	);
});
