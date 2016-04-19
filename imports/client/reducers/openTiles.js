import { openTiles } from 'imports/client/constants/actionTypes.js';
const INITIAL_TILES_COUNT = 0;
const { UPDATE, RESET } = openTiles;

export default function openNumber(state = INITIAL_TILES_COUNT, action){
	switch(action.type){
		case UPDATE: 
			return state + 1;
		case RESET:
			return INITIAL_TILES_COUNT;
		default: 
			return state;
	}
}