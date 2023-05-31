import React from 'react';
import img1 from '../../images/Proposal/Proposal-1.png';
import img2 from '../../images/Proposal/Proposal-2.png';
import img3 from '../../images/Proposal/Proposal-3.png';

function Week1() {
	return (
		<>
			<h1>Project Proposal</h1>
			<img
				src={img1}
				alt='proposal pg1'
				style={{width:"75%"}}
			/>
			<img
				src={img2}
				alt='proposal pg2'
				style={{width:"75%"}}
			/>
			<img
				src={img3}
				alt='proposal pg3'
				style={{width:"75%"}}
			/>
		</>
	);
}

export default Week1;
