/** The response type of the API call */
export type ResponseType = EventType[];

/** Event Entity */
type EventType = {
	id: string;
	name: string;
	markets: MarketType[];
};

/** Market Entity */
export type MarketType = {
	id: string;
	name: string;
	selections: SelectionType[];
};

/** Selection Entity */
export type SelectionType = {
	id: string;
	name: string;
	price: number;
};

/** Selected Entity */
export type SelectedType = {
	id: string;
	name: string;
	price: number;
	marketID: string;
	type: string;
};

/** Action types for reducer */
export enum ActionType {
	FETCHING_DATA = "FETCHING_DATA",
	FETCHED_DATA = "FETCHED_DATA",
	FETCH_ERROR = "FETCH_ERROR",
	SELECTIONS = "SELECTIONS",
	DELETE_SELECTION = "DELETE_SELECTION",
}

/** type for initial state of the store */
export type InitialState = {
	data: ResponseType;
	status: string;
	error: any;
	selections: SelectedType[];
};

/**type for event component props**/
export interface IEvent {
	name: string;
	teamSelections: SelectionType[];
	playerSelections: SelectionType[];
	markets: MarketType[] | [];
	teamMarketID: string;
	playerMarketID: string;
}
