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
type SelectionType = {
	id: string;
	name: string;
	price: number;
};


