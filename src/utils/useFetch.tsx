import { useEffect } from "react";

export const useFetch = () => {
	const initialState = {
		status: "idle",
		error: null,
		data: [],
	};

	useEffect(() => {
		let cancelRequest = false;

		const fetchData = async () => {
			const response = await fetch(
				`http://www.mocky.io/v2/59f08692310000b4130e9f71`
			);

			const data = await response.json();

			console.log(data);
		};

		fetchData();

		return function cleanup() {
			cancelRequest = true;
		};
	}, []);
};
