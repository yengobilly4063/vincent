import React, { createContext, useContext, useState } from "react";
import {
  getActivePlayerInfoFromLocalStorage,
  getPlayersInfoFromLocalStorage,
  storeActivePlayerInfoToLocalStorage,
  storePlayersInfoToLocalStorage,
} from "../utils/player-util";

const initialPlayerContextInfo = {
  players: {
    1: { id: 1, value: "X", name: "" },
    2: { id: 2, value: "X", name: "" },
  },
  activePlayer: {},
  switchActivePlayer: () => {},
};

const PlayerContext = createContext({ initialPlayerContextInfo });

export const usePlayerContext = () => useContext(PlayerContext);

const PlayerContextProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState(
    getActivePlayerInfoFromLocalStorage()
  );
  const [players, setPlayers] = useState(
    getPlayersInfoFromLocalStorage() || initialPlayerContextInfo.players
  );

  const handleSetPlayers = (playerOneName, playerTwoName) => {
    const activePlayerId = Math.floor(Math.random() * 2) + 1;

    const newPlayers = {
      1: { id: 1, value: "X", name: playerOneName },
      2: { id: 2, value: "O", name: playerTwoName },
    };

    setPlayers(newPlayers);
    storePlayersInfoToLocalStorage(newPlayers);

    console.log("active player :", newPlayers[activePlayerId]);
    setCurrentPlayer(newPlayers[activePlayerId]);
    storeActivePlayerInfoToLocalStorage(newPlayers[activePlayerId]);
  };

  const switchActivePlayer = (activePlayer) => {
    const switchToPlayerId = activePlayer.id === 2 ? 1 : 2;
    const newPlayer = players[switchToPlayerId];
    storeActivePlayerInfoToLocalStorage(newPlayer);
    setCurrentPlayer(newPlayer);
  };

  const getCurrentPlayer = () => players[currentPlayer?.id];

  const activePlayer = getCurrentPlayer();

  const someChange = "somechange";
  console.log(someChange);

  return (
    <PlayerContext.Provider
      value={{ handleSetPlayers, activePlayer, switchActivePlayer }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
