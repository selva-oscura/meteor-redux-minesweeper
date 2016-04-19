import { combineReducers } from 'redux';
import incrementer from '/imports/client/reducers/incrementReducer';
import gameStatus from '/imports/client/reducers/gameStatus';
import gameStats from '/imports/client/reducers/gameStatistics';
import flagNumbers from '/imports/client/reducers/flagState';

const rootReducer = combineReducers({
	gameStatus,
	openTiles: incrementer("OPEN_TILES"),
	gameTime: incrementer("TIME"),
	flagNumbers,
	gameStats
});

export default rootReducer;