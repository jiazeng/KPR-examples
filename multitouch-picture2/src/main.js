/*
 
 /*
	Touch State Machines

	A TouchStateMachine is useful when a container wants to handle touch events in a variety of ways depending on the current
	situation.  For example you may want to perform a combination of image mainpulations such as pinching to pan / zoom / rotate, dragging,
	tossing, and so on. Many times you'll want animation states to be applied in between these to animate a toss, a bounce,
	or even a transition to another image.
	
	A TouchStateMachine consists of a set of subclasses of TouchState, a set of condition functions that describe when to transition between states,
	and a set of TouchStateTransitions which bind a fromState, a toState, and a condition function.
	
	The TouchBehavior is used by a container that wants to implement a TouchStateMachine. The user should override the buildTouchStateMachine
	method and return a TouchStateMachine.

	The TouchBehavior creates a oneFingerHandler and a twoFingerHandler. The idea is that the TouchStates and condition functions themselves should not 
	usually have to do a lot of touch tracking and book keeping themselves, instead they may retreive interesting information from these finger handlers.
				
	For example a Drag state may be interested in 
		this.oneFingerHandler.deltaTranslation
	a Rotate state may be interested in
		this.twoFingerHandler.frameDeltaRotation
	and a Toss state may interested in
		this.oneFingerHandler.velocity
		
	Animated TouchStates may choose to perform a KPR transition and receive callbacks by calling the runVisualTransition method and handling the callbacks.

	Debugging tip: When creating and testing your own state machine it's often useful to uncomment the lines in fingers.xml that print out the
	enter and exit state information, specifically:
		//print("exit state: " + this.currentState.id)
		//print("enter state: " + state.id)
*/

/*
	The buildPictureTouchStateMachine function creates a TouchStateMachine that allows for manipulating pictures.
*/
    	
import {
	TouchBehavior
} from 'fingers';

import {
	buildPictureTouchStateMachine,
	fitPicture
} from 'pictureTouchStates';

	left: 0, right: 0, top: 0, bottom: 0, active: true, skin: whiteSkin, 
	Behavior: class extends TouchBehavior {
		buildTouchStateMachine(container) {
			super.onCreate(container, data);	
	},
	contents: [
			left: 0, top: 0, name: 'picture', url: "./veggies.jpg", 
			Behavior: class extends Behavior{
			} 
		}),
}));