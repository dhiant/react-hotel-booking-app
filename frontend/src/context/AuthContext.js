import { createContext, useEffect, useReducer } from "react";

const initialState = {
	user: JSON.parse(localStorage.getItem("user")) || null,
	loading: false,
	error: null,
};

// context
const AuthContext = createContext(initialState);

// reducer function
function AuthContextReducer(state, action) {
	switch (action.type) {
		case "LOGIN_START":
			return { user: null, loading: true, error: null };

		case "LOGIN_SUCCESS":
			return { user: action.payload, loading: false, error: false };

		case "LOGIN_FAILURE":
			return { user: null, loading: false, error: action.payload };

		case "LOGOUT":
			return initialState;
		default:
			return state;
	}
}

// provider
const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthContextReducer, initialState);

	//set user info in localStorage
	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(state.user));
	}, [state.user]);

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				loading: state.loading,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthContextProvider };
