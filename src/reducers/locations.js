import { LOCATIONS_REPLACE } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOCATIONS_REPLACE:
			return action.value;
		default:
			return state;
	}
}
