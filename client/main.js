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

// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
