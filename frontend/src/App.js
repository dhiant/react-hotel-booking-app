import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import IndividualHotel from "./pages/IndividualHotel";
import { HotelSearchContextProvider } from "./context/HotelSearchContext";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";

const App = () => {
	return (
		<AuthContextProvider>
			<HotelSearchContextProvider>
				<Router>
					<Routes>
						<Route exact path="/" element={<Home />}></Route>
						<Route path="/hotels" element={<Hotels />}></Route>
						<Route path="/hotels/:id" element={<IndividualHotel />}></Route>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/checkout" element={<Checkout />} />
					</Routes>
				</Router>
			</HotelSearchContextProvider>
		</AuthContextProvider>
	);
};

export default App;
