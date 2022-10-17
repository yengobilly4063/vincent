import React, { useEffect } from "react";
import styles from "./page-styles/Board.module.scss";
import GameCell from "../components/game-cell/GameCell";
import { useGameContext } from "../contexts/gameContext";
import { usePlayerContext } from "../contexts/playerContext";
import { useNavigate } from "react-router-dom";
import PlayerInfo from "../components/player/PlayerInfo";


export default function Board() {
	const {cellInfos} = useGameContext()
	const {activePlayer} = usePlayerContext()
	const navigate = useNavigate();
	const {cellStates} = useGameContext();

	useEffect(() => {
		if(!activePlayer){navigate('/')}
	}, [])

	useEffect(() => {
		console.log("overall cellStates states has changed")
		console.log("cellStates :",cellStates)
	  }, [cellStates])

	return (
		<div className={styles.wrapper}>
			<div>
			<PlayerInfo />
			<div className={styles.boardWrapper}>
				{cellInfos.map(cellInfo => (<GameCell key={cellInfo.id} cellInfo={cellInfo} />))}
			</div>
			</div>
		</div>
	);
}
