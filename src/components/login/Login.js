import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { usePlayerContext } from "../../contexts/playerContext";
import styles from "./Login.module.scss";

export default function Login() {
	const navigate = useNavigate();
	const {handleSetPlayers} = usePlayerContext();

	const [players, setPlayers] = useState({
		playerOneName: "",
		playerTwoName: "",
	});

	const handlePlayerChange = (event) => {
		const {name, value} = event.target;
		setPlayers((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handlePlayerSubmit = (event) => {
		event.preventDefault();
		handleSetPlayers(players.playerOneName, players.playerTwoName);
		navigate("/board");
	};

	return (
		<form
			onSubmit={handlePlayerSubmit}
			className={styles.formWrapper}
		>
			<div className={styles.formHeader}>TIC TAC TOE</div>
			<div className={styles.playerInfoWrapper}>
				<div className={styles.formControl}>
					<label id="playerOneName">Player One Name</label>
					<input
						type="text"
						name="playerOneName"
						placeholder="Player One Name"
						required
						onChange={handlePlayerChange}
					/>
				</div>
				<div className={styles.formControl}>
					<label id="playerTwoName">Player Two Name</label>
					<input
						type="text"
						name="playerTwoName"
						placeholder="Player Two Name"
						required
						onChange={handlePlayerChange}
					/>
				</div>
			</div>
			<div className={styles.formAction}>
				<button type="submit">Start Game</button>
			</div>
		</form>
	);
}
