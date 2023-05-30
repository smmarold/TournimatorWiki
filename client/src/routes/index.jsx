import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Week1 from './Week1/week1';
import Week2 from './Week2/week2';
import Week3 from './Week3/week3';
import Week4 from './Week4/week4';
import Week5 from './Week5/week5';
import Week6 from './Week6/week6';
import Week7 from './Week7/week7';
import Week8 from './Week8/week8';
import Week9 from './Week9/week9';
import Week10 from './Week10/week10';
import Midterm from './Week5/midterm';
import StatusReports from './StatusReports/StatusReports';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Week1 />,
		errorElement: <div>ERROR COMP GOES HERE</div>,
	},
	{
		path: '/week1',
		element: <Week1 />,
		errorElement: <div>ERROR COMP GOES HERE</div>,
	},
	{
		path: '/week2',
		element: <Week2 />,
		errorElement: <div>ERROR COMP GOES HERE</div>,
	},
	{
		path: '/week3',
		element: <Week3 />,
		errorElement: <div>ERROR COMP GOES HERE</div>,
	},
	{
		path: '/week4',
		element: <Week4 />,
		errorElement: <div>ERROR COMP GOES HERE</div>,
	},
	{
		path: '/erd',
		element: <Week5 />,
		errorElement: <div>ERROR COMP GOES HERE</div>,
	},
	{
		path: '/midterm',
		element: <Midterm />,
		errorElement: <div>ERROR COMP GOES HERE</div>,
	},
	{
		path: '/week6',
		element: <Week6 />,
		errorElement: <div>ERROR COMP GOES HERE</div>,
	},
	{
		path: '/week7',
		element: <Week7 />,
		errorElement: <div>ERROR COMP GOES HERE</div>,
	},
	{
		path: '/week8',
		element: <Week8 />,
		errorElement: <div>ERROR COMP GOES HERE</div>,
	},
	{
		path: '/week9',
		element: <Week9 />,
		errorElement: <div>ERROR COMP GOES HERE</div>,
	},
	{
		path: '/week10',
		element: <Week10 />,
		errorElement: <div>ERROR COMP GOES HERE</div>,
	},
	{
		path: '/status',
		element: <StatusReports />,
		errorElement: <div>ERROR COMP GOES HERE</div>,
	},
]);

export default router;
