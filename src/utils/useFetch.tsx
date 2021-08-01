import { useEffect, useContext } from "react";
import { AppContext } from "./globalState/store";
import { ActionType } from "./types";

export const useFetch = () => {
	//context
	const { dispatch } = useContext(AppContext);

	//url
	const url = `http://www.mocky.io/v2/59f08692310000b4130e9f71`;

	useEffect(() => {
		let cancelRequest = false;

		const fetchData = async () => {
			dispatch({
				type: ActionType.FETCHING_DATA,
			});

			try {
				const response = await fetch(url);
				const data = await response.json();

				if (cancelRequest) return;
				dispatch({
					type: ActionType.FETCHED_DATA,
					payload: data,
				});
			} catch (error) {
				if (cancelRequest) return;
				dispatch({ type: ActionType.FETCH_ERROR, payload: error.message });
			}
		};

		fetchData();

		return function cleanup() {
			cancelRequest = true;
		};
	}, [dispatch, url]);
};
