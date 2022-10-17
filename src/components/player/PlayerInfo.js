import React from 'react'
import { usePlayerContext } from '../../contexts/playerContext'
import styles from "./PlayerInfo.module.scss"

const PlayerInfo = () => {
    const {activePlayer} =  usePlayerContext()
  return (
    <div className={styles.playerInfowrapper}>{`Player ${activePlayer.id}'s Turn`}</div>
  )
}

export default PlayerInfo
