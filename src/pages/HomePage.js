import React from "react";

import Login from "../components/login/Login";
import styles from "./page-styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<Login />
			<a href="/board">Google</a>
		</div>
	);
}
