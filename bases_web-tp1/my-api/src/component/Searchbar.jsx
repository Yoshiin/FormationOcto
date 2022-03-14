import React, { useState, useEffect } from 'react'
import MyList from "./MyList";

export const SearchBar= () => {
	const searchUrl = "https://api.domainsdb.info/v1/domains/search?limit=50&domain=";
	const [results, setResults] = useState({});
	const [toSearch, setToSearch] = useState(0);

	useEffect(() => {
			fetch(searchUrl + toSearch)
				.then(data => {return data.json() })
				.then(d => {
					setResults(d);
				})
		},
		[toSearch]
	);

	return (
		<React.Fragment>
			<p>Search in domain name :&nbsp;
				<input onKeyUp={(e) => {
						setToSearch(e.target.value);
					}}
				/>
				</p>
			<MyList data={results}/>
		</React.Fragment>
	)
};
