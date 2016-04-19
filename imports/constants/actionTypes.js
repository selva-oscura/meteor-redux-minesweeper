const gameStats = {
	EASY: {
		label: "easy",
		value: "DIFFICULT_EASY"
	},
	NORMAL: {
		label: "normal",
		value: "DIFFICULT_NORMAL"
	},
	HARD: {
		label: "hard",
		value: "DIFFICULT_HARD"
	}
};

const gameStatus = {
	PLAYING: {
		label: "playing",
		value: "GAME_STATUS_PLAYING"
	},
	OVER: {
		label: "gameover",
		value: "GAME_STATUS_GAMEOVER"
	},
	CLEARED: {
		label: "cleared",
		value: "GAME_STATUS_CLEARED"
	}
};

const flagActions = {
	UPDATE: "UPDATE_FLAGS",
	RESET: "RESET_FLAGS"
};

const openTiles = {
	UPDATE: "UPDATE_OPEN_TILES",
	RESET: "RESET_OPEN_TILES"
};

const gameTime = {
	UPDATE: "UPDATE_TIME",
	RESET: "RESET_TIME"
}

// root action types
const actionTypes = {
	gameStats,
	gameStatus,
	flagActions,
	openTiles,
	gameTime
};

export default actionTypes;