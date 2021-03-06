// Higher Order Component (HOC) - A compenent (HOC) that renders another compenent
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedCompenent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info. Please don't share!</p>}
			<WrappedCompenent {...props} />
		</div>
	);
};

const requireAuthentication = (WrappedCompenent) => {
	return (props) => (
		<div>
			{props.isAuthenticated ? <WrappedCompenent {...props} /> : <p>Please login to view the info</p> }
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));