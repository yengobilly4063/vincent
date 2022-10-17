import React, {useContext, createContext, useState} from "react";
import {getGameStateToLocalStorage} from "../utils/game-state-util";
import { initialCellInfos, initialCellStates } from "../utils/cell-state";

const initialGameContextState = {
	gameState: [],
	cellInfos: [],
	updateCellState: () => {},
	getCellState: () => typeof {},
	handleSetPlayers: () => {},
	handleGameState: () => {},
};

const GameContext = createContext(initialGameContextState);

export const useGameContext = () => useContext(GameContext);

const GameContextProvider = ({children}) => {
	const [gameState, setGameState] = useState(getGameStateToLocalStorage());
	const [cellStates, setCellStates] = useState(initialCellStates);
	const [cellInfos, _] = useState(initialCellInfos);


	const getCellState = (id) => cellStates[id]

	const updateCellState = (cellInfo) => {
		setCellStates(prev => ({
			...prev, 
			[cellInfo.id] : cellInfo
		}))
	}


	const handleGameState = (gameState) => {
		setGameState((prev) => [...prev, gameState]);
	};

	return (
		<GameContext.Provider
			value={{ gameState, handleGameState, cellStates, cellInfos, getCellState, updateCellState}}
		>
			{children}
		</GameContext.Provider>
	);
};

export default GameContextProvider;
