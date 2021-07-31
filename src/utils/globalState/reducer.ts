import { ActionType, AppActions, InitialState, SelectionType } from "../types";

const Reducer = (state: InitialState, action: any) => {
	const { type, payload } = action;

	switch (type) {
		case ActionType.FETCHED_DATA:
			return {
				...state,
				status: "fetched",
				data: payload,
			};
		case ActionType.FETCHING_DATA:
			return {
				...state,
				status: "fetching",
			};

		case ActionType.FETCH_ERROR:
			return {
				...state,
				status: "error",
				error: payload,
			};
		case ActionType.SELECTIONS:
			return {
				...state,
				selections: [...state.selections, payload],
			};
		case ActionType.DELETE_SELECTION:
			return {
				...state,
				selections: state.selections.filter(
					(selection: SelectionType) => selection.id !== payload.id
				),
			};
		default:
			return state;
	}
};
export default Reducer;
