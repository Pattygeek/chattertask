import {
	ActionType,
	InitialState,
	SelectionType,
	SelectedType,
} from "../types";

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
			let arrSelect: SelectedType[] = [...state.selections];

			const exist = arrSelect.some(
				(el: SelectedType) => el.marketID === payload.marketID
			);

			if (!exist) {
				arrSelect.push(payload);
				state.selections.push(payload);
			} else {
				arrSelect.push(payload);
				arrSelect = arrSelect.filter(
					(selection: SelectedType) =>
						selection.marketID === payload.marketID &&
						selection.id === payload.id
				);
			}
			const result: SelectedType[] = state.selections.map(
				(obj: SelectedType) =>
					arrSelect.find((o: SelectedType) => o.marketID === obj.marketID) ||
					obj
			);

			return {
				...state,
				selections: result,
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
