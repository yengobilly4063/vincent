export const storePlayersInfoToLocalStorage = (players) => {
	localStorage.setItem("players", JSON.stringify(players));
};

export const getPlayersInfoFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("players")) || {};
};

export const storeActivePlayerInfoToLocalStorage = (players) => {
	localStorage.setItem("active-player", JSON.stringify(players));
};

export const getActivePlayerInfoFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("active-player")) || {};
};



