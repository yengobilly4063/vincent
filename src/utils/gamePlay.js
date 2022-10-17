import { winingCombinations } from "../constants/winningCombination";
// Not being used yet
// move to useGamePlay
// there yoiu have access to movesLeft
const checkWinner = (currentPlayerPosition) => {
    const possibleWinCombo = winingCombinations[currentPlayerPosition];

    for (let i = 0; i < possibleWinCombo.length; i++) {
        const firstChance = gameBoard[possibleWinCombo[i][0]];
        const secondChance = gameBoard[possibleWinCombo[i][1]];
        setMovesLeft(() => movesLeft - 1);
        console.log(movesLeft);
        if (currentChar === firstChance && firstChance === secondChance) {
            setIsGameOver(true);
            setWinner(currentChar);
        }

        if (movesLeft === 0) {
            setIsGameOver(true);
        }
    }
}
