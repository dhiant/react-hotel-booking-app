import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import IndividualHotel from "./pages/IndividualHotel";
import { HotelSearchContextProvider } from "./context/HotelSearchContext";

const App = () => {
	return (
		<HotelSearchContextProvider>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route path="/hotels" element={<Hotels />}></Route>
					<Route path="/hotels/:id" element={<IndividualHotel />}></Route>
				</Routes>
			</Router>
		</HotelSearchContextProvider>
	);
};

export default App;
