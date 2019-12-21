import React from 'react';
import Helmet from "react-helmet"

import MainTheme from '../components/MainTheme';
//images
import stairs_main from '../images/stairs_main.jpg';
import homes_main from '../images/homes_main.jpg';
import homes_double from '../images/homes_double.jpg';
import homes_modern from '../images/homes_modern.jpg';
import homes_orange from '../images/homes_orange.jpg';
import homes_red from '../images/homes_red.jpg';
import room_white from '../images/room_white.jpg';
import stairs_brown from '../images/stairs_brown.jpg';
import stairs_dark from '../images/stairs_dark.jpg';
import stairs_orange from '../images/stairs_orange.jpg';
import stairs_red from '../images/stairs_red.jpg';
import stairs_white from '../images/stairs_white.jpg';
import stairs_yellow from '../images/stairs_yellow.jpg';
import stairs_light from '../images/stairs_light.jpg';

const IndexPage = () => {
	const images = [
		stairs_main,
		homes_main,
		stairs_brown,
		homes_double,
		stairs_dark,
		homes_modern,
		stairs_orange,
		homes_orange,
		room_white,
		homes_red,
		stairs_red,
		stairs_white,
		stairs_yellow,
		stairs_light
	];
	return (
	<>
	<Helmet><title>Stolarnia pod jałowcem</title></Helmet>
	<MainTheme backImage={stairs_main} images={images} />
	</>
)
};
export default IndexPage;
