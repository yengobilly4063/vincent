import React, { useEffect } from 'react'
import { useGameContext } from '../../contexts/gameContext'
import { usePlayerContext } from '../../contexts/playerContext';
import styles from "./GameCell.module.scss"

const GameCell = ({cellInfo}) => {

  const {getCellState, updateCellState, cellStates} = useGameContext();
  const {activePlayer, switchActivePlayer} = usePlayerContext()

  const cellState = getCellState(cellInfo.id)

    const handleCellClicked = () => {
      updateCellState({...cellState, value: activePlayer.value, isPlayed: true, playedBy: activePlayer.id })
      switchActivePlayer(activePlayer)
    }
  const getCellClass = () => {
    if (cellState.value === "") return ""
    return cellState.value === "X" ? styles.cellBlue : styles.cellRed
  }

  return (
    <button disabled={cellState.isPlayed} className={styles.cell} onClick={handleCellClicked}>
	  	<span className={getCellClass()}>{cellState.value}</span>
	  </button>
  )
}

export default GameCell
