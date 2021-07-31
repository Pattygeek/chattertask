import { createContext, useReducer, Dispatch } from "react";
import Reducer from "./reducer";
import { InitialState, AppActions } from "../types";

const initialState: InitialState = {
	data: [],
	status: "idle",
	error: null,
	selections: [],
};

//create context for the appplication
export const AppContext = createContext<{
	state: InitialState;
	dispatch: Dispatch<AppActions>;
}>({
	state: initialState,
	dispatch: () => null,
});

const Store = ({ children }: any) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export default Store;
