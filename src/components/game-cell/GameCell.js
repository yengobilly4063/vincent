import React, { useEffect } from 'react'
import { useGameContext } from '../../contexts/gameContext'
import { usePlayerContext } from '../../contexts/playerContext';
import styles from "./GameCell.module.scss"

const GameCell = ({cellInfo}) => {

  const {getCellState, updateCellState, cellStates} = useGameContext();
  const {activePlayer, switchActivePlayer} = usePlayerContext()

  const cellState = getCellState(cellInfo.id)

    const handleCellClicked = () => {
      // console.log("cellStates[cellInfo.id] :",cellState)
      // console.log("active player : ", activePlayer)
      updateCellState({...cellState, value: activePlayer.value, isPlayed: true, playedBy: activePlayer.id })
      switchActivePlayer(activePlayer)
    }

   

  return (
    <button disabled={cellState.isPlayed} className={styles.cell} onClick={handleCellClicked}>
	  	<span className={styles.cellContent}>{cellState.value}</span>
	  </button>
  )
}

export default GameCell
