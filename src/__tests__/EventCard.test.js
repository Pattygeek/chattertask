import Store from "../utils/globalState/store";
import { initialState } from "../utils/globalState/store";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { EventCard } from "../components";

afterEach(cleanup);

describe("test the reducer and actions", () => {
	it("should return the initial state", () => {
		expect(initialState).toEqual({
			data: [],
			status: "idle",
			error: null,
			selections: [],
		});
	});
});
