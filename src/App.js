import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Board from "./pages/BoardPage";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/board"
					element={<Board />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
