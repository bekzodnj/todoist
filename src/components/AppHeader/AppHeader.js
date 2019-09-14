import React from 'react';
import './AppHeader.css';

const AppHeader = ({todo, done}) => {
	return (
		<div className="app-header d-flex">
			<h1 className="text-light">Todoist <i className="fa fa-check text-light"></i></h1>
			<h2 className="text-light">{todo} more to do, {done} done</h2>
		</div>
	);
};

export default AppHeader;