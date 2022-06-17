// import React from 'react'
// import {Routes, Route} from 'react-router-dom';
// import Home from './content/home/home';
// import About from './content/about/about';
// import Fakultas from './content/fakultas/Fakultas';

// const App = () => {
// 	return(
// 		<Routes>
// 			<Route path='/' element={<Home />}/>
// 			<Route path='RightWay' element={<About />} />
// 			<Route path='fakultas' element={<Fakultas />} />
// 		</Routes>
// 	) 
// }

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			setError(false);
			try {
				const result = await axios.get('http://universities.hipolabs.com/search?country=United+States');
				setData(result.data);
			}
			catch (err) {
				setError(true);
			}
			setLoading(false);
		}
		fetchData();
	}, []);

	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Error</p>}
			{data.map((item, index) => (
				<div key={index}>
					<h3>{item.name}</h3>
				</div>
			))}
		</div>
	)
}

export default App;