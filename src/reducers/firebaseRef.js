import { FIREBASE_REF_SET } from '../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FIREBASE_REF_SET:
			return action.value;
		default:
			return state;
	}
}
