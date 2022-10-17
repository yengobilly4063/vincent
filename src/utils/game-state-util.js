export const storeGameStateToLocalStorage = (gameState) => {
	localStorage.setItem("game-state", JSON.stringify(gameState));
};

export const getGameStateToLocalStorage = () => {
	return JSON.parse(localStorage.getItem("game-state")) || [];
};
