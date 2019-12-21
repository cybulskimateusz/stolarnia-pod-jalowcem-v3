import React from 'react';
import Helmet from "react-helmet"

import MainTheme from '../components/MainTheme';
//images
import stairs_main from '../images/stairs_main.jpg';
import stairs_brown from '../images/stairs_brown.jpg';
import stairs_dark from '../images/stairs_dark.jpg';
import stairs_orange from '../images/stairs_orange.jpg';
import stairs_red from '../images/stairs_red.jpg';
import stairs_white from '../images/stairs_white.jpg';
import stairs_yellow from '../images/stairs_yellow.jpg';
import stairs_light from '../images/stairs_light.jpg';

const Schody = () => {
	const images = [
		stairs_main,
		stairs_brown,
		stairs_dark,
		stairs_orange,
		stairs_orange,
		stairs_red,
		stairs_white,
		stairs_yellow,
		stairs_light
	];
	return (
		<>
			<Helmet><title>Schody - Stolarnia pod jałowcem</title></Helmet>
			<MainTheme backImage={stairs_brown} images={images} />
		</>
	);
};
export default Schody;
