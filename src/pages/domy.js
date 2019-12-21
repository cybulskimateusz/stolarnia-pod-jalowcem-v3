import React from 'react';
import Helmet from "react-helmet"

import MainTheme from '../components/MainTheme';
//images
import homes_main from '../images/homes_main.jpg';
import homes_double from '../images/homes_double.jpg';
import homes_modern from '../images/homes_modern.jpg';
import homes_orange from '../images/homes_orange.jpg';
import homes_red from '../images/homes_red.jpg';
import room_white from '../images/room_white.jpg';

const Domy = () => {
	const images = [ homes_main, homes_double, homes_modern, homes_orange, homes_red, room_white ];
	return (
		<>
			<Helmet><title>Domy - Stolarnia pod jałowcem</title></Helmet>
			<MainTheme backImage={homes_red} images={images} />
		</>
	);
};
export default Domy;
