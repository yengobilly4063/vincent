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
	movesLeft: null
};

const GameContext = createContext(initialGameContextState);

export const useGameContext = () => useContext(GameContext);

const GameContextProvider = ({children}) => {
	const [gameState, setGameState] = useState(getGameStateToLocalStorage());
	const [cellStates, setCellStates] = useState(initialCellStates);
	const [cellInfos, _] = useState(initialCellInfos);
	const getCellState = (id) => cellStates[id]

	// Create state to determin game started, this should change once fist player plays
		//Store this state in localStorage

	//create a history state and update it when game finishes
	//sample structure [{gameNumber: 1, state: cellStates}]

	const movesLeft = Object.values(cellStates).length - Object.values(cellStates).filter(m => m.isPlayed).length

	const updateCellState = (cellInfo) => {
		setCellStates(prev => ({
			...prev, 
			[cellInfo.id] : cellInfo
		}))
	}


	if(movesLeft === 0){
		// por winner or tie
		//store cellstate to hitory
		setCellStates(initialCellStates)
		//update
	}


	const handleGameState = (gameState) => {
		setGameState((prev) => [...prev, gameState]);
	};

	return (
		<GameContext.Provider
			value={{ gameState, handleGameState, cellStates, cellInfos, getCellState, updateCellState, movesLeft}}
		>
			{children}
		</GameContext.Provider>
	);
};

export default GameContextProvider;
