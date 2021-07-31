/** The response type of the API call */
export type ResponseType = EventType[];

/** Event Entity */
type EventType = {
	id: string;
	name: string;
	markets: MarketType[];
};

/** Market Entity */
type MarketType = {
	id: string;
	name: string;
	markets: SelectionType[];
};

/** Selection Entity */
export type SelectionType = {
	id: string;
	name: string;
	price: number;
};

export enum ActionType {
	FETCHING_DATA = "FETCHING_DATA",
	FETCHED_DATA = "FETCHED_DATA",
	FETCH_ERROR = "FETCH_ERROR",
	SELECTIONS = "SELECTIONS",
	DELETE_SELECTION = "DELETE_SELECTION",
}

type ActionMap<M extends { [index: string]: any }> = {
	[Key in keyof M]: M[Key] extends undefined
		? { type: Key }
		: { type: Key; payload: M[Key] };
};

export type Payload = {
	[ActionType.FETCHING_DATA]: string;
	[ActionType.FETCHED_DATA]: ResponseType;
	[ActionType.FETCH_ERROR]: {
		status: string;
		error: any;
	};
	[ActionType.SELECTIONS]: SelectionType;
	[ActionType.DELETE_SELECTION]: SelectionType;
};

export type AppActions = ActionMap<Payload>[keyof ActionMap<Payload>];

export type InitialState = {
	data: ResponseType;
	status: string;
	error: any;
	selections: SelectionType[];
};
