import React, { useState, useEffect } from "react";
import axios from "axios";

const Fakultas = () => {
	const [fakultas, setFakultas] = useState();

	async function getUser() {
		try {
			const response = await axios.get("http://localhost:8080/api/fakultas/list");
			setFakultas(response);
		} catch (error) {
			console.error(error);
		}
	}

	return(
		<div>
			{fakultas.map((item, index) => (
				<h1 key={index}>{item.fakultas_name}</h1>
			))}
		</div>
	)
};

export default Fakultas;
