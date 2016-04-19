import React from 'react';
import ReactDOM from 'react-dom';

function App(){
	return (
		<div>
			<h1>Boom!</h1>
		</div>
	);
}

Meteor.startup(() => {
	ReactDOM.render(<App />, document.getElementById('root'));
});