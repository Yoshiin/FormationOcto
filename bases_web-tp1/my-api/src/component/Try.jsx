import { useState, useEffect } from 'react'
export const SearchBar= () => {

	const searchUrl = "https://api.domainsdb.info/v1/domains/search?limit=50&domain=";
	const [results, setResults] = useState(0);
	const [toSearch, setToSearch] = useState(0);

	useEffect(() => {
		fetch(searchUrl + toSearch,
		).then(setResults), [toSearch]
	});

	return (
		<p>
			<p>Search in Domain names <input keyUp={e => setToSearch(e.target.value)}/></p>
			{results}
		</p>
	)
};
