import { createContext, useReducer } from "react";

const initialState = {
	city: undefined,
	date: undefined,
	persons: undefined,
};

const HotelSearchContext = createContext(initialState);

// reducer function
function HotelSearchReducer(state, action) {
	//   console.log('action received', action);
	switch (action.type) {
		case "SET_SEARCH":
			return action.payload;
		case "RESET_SEARCH":
			return initialState;
		default:
			return state;
	}
}

const HotelSearchContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(HotelSearchReducer, initialState);
	return (
		<HotelSearchContext.Provider
			value={{
				city: state.city,
				date: state.date,
				persons: state.persons,
				dispatch,
			}}
		>
			{children}
		</HotelSearchContext.Provider>
	);
};

export { HotelSearchContext, HotelSearchContextProvider };
