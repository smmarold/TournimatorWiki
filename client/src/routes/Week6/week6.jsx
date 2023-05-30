import React from 'react';
import createAccount from '../../images/ActivityDiagrams/CreateAccount.pdf';
import createEvent from '../../images/ActivityDiagrams/CreateEvent.pdf';
import joinEvent from '../../images/ActivityDiagrams/JoinEvent.pdf';
import manageAccount from '../../images/ActivityDiagrams/ManageAccount.pdf';
import ManageEvent from '../../images/ActivityDiagrams/ManageEvent.pdf';
import ActivityDiagram from './activityDiagram';

const actDiags = [
	{
		title: 'Create Account',
		filePath: createAccount,
	},
	{
		title: 'Create Event',
		filePath: createEvent,
	},
	{
		title: 'Join Event',
		filePath: joinEvent,
	},
	{
		title: 'Manage Event',
		filePath: ManageEvent,
	},
	{
		title: 'manageAccount',
		filePath: manageAccount,
	},
];

function Week6() {
	return (
		<>
			{actDiags.map((el) => {
				return (
					<ActivityDiagram
						title={el.title}
						filepath={el.filePath}
					/>
				);
			})}
		</>
	);
}

export default Week6;
