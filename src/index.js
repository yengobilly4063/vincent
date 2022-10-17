import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import GameContextProver from "./contexts/gameContext";
import PlayerContextProvider from "./contexts/playerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<PlayerContextProvider>
			<GameContextProver>
				<App />
			</GameContextProver>
		</PlayerContextProvider>
	</React.StrictMode>
);
