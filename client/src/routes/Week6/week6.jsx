import React from 'react';
import createAccount from '../../images/ActivityDiagrams/CreateAccount-1.png';
import createEvent from '../../images/ActivityDiagrams/CreateEvent-1.png';
import joinEvent from '../../images/ActivityDiagrams/JoinEvent-1.png';
import manageAccount from '../../images/ActivityDiagrams/ManageAccount-1.png';
import ManageEvent from '../../images/ActivityDiagrams/ManageEvent-1.png';
import ManageTeam from '../../images/ActivityDiagrams/ManageTeam.png';

function Week6() {
	return (
		<>
			<h1>Activity Diagrams</h1>
			<div>
				<h2>Create Account</h2>
				<img
					src={createAccount}
					alt='createAccount'
				/>
			</div>
			<div>
				<h2>Manage Account</h2>
				<img
					src={manageAccount}
					alt='manageAccount'
				/>
			</div>
			<div>
				<h2>Create Event</h2>
				<img
					src={createEvent}
					alt='createEvent'
				/>
			</div>
			<div>
				<h2>Manage Event</h2>
				<img
					src={ManageEvent}
					alt='ManageEvent'
				/>
			</div>
			<div>
				<h2>Join Event</h2>
				<img
					src={joinEvent}
					alt='joinEvent'
				/>
			</div>
			<div>
				<h2>Manage Team</h2>
				<img
					src={ManageTeam}
					alt='ManageTeam'
				/>
			</div>
		</>
	);
}

export default Week6;
