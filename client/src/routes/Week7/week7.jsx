import React from 'react';
import img1 from '../../images/ClassDiagram/ClassDiagram-1.png';
import img2 from '../../images/ClassDiagram/ClassDiagram-2.png';

function Week7() {
	return (
		<>
			<h1>Class Diagram</h1>
			<img
				src={img1}
				alt='Class diagram'
				style={{width:"75%"}}
			/>
			<img
				src={img2}
				alt='Class diagram'
				style={{width:"75%"}}
			/>
		</>
	);
}

export default Week7;
