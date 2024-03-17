import axios from "axios";
import React from "react";

const useFetch = (url) => {
	const [data, setData] = React.useState(null);
	const [error, setError] = React.useState(null);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				let response = await axios.get(url);
				if (response.status === 200) {
					setData(response.data);
				}
			} catch (err) {
				setError(err);
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url]);
	return { data, error, loading };
};

export default useFetch;
