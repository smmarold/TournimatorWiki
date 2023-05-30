import React from 'react';
import img from '../../images/Figma.png';

function Week4() {
	const figmaURL =
		'https://www.figma.com/file/ncIHsR0kMQcXbPt4kJBt7o/Tournimator?type=design&node-id=0-1&t=3WciiAGLJcV94FjE-0';
	return (
		<>
			<h1>Wirefram/Prototype</h1>
			<a
				href={figmaURL}
				target='_blank'
				rel='noreferrer'
			>
				<img
					src={img}
					alt='Wireframe Img'
				/>
			</a>
		</>
	);
}

export default Week4;
