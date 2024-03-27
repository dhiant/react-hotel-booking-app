import axios from "axios";
import { useContext, useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
	const [credentials, setCredentials] = useState({
		username: undefined,
		password: undefined,
	});

	const [showPassword, setShowPassword] = useState(false);

	const navigate = useNavigate();

	const { loading, error, dispatch } = useContext(AuthContext);

	const handleChange = (e) => {
		setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleClick = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });

		try {
			const res = await axios.post(
				"http://localhost:8000/api/auth/login",
				credentials
			);
			console.log("res", res);
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
			navigate("/");
		} catch (err) {
			dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
			console.error(err);
		}
	};

	return (
		<div className="h-screen flex items-baseline text-center flex-col md:flex-row gap-y-20 overflow-hidden">
			<div className="px-3 w-full md:w-1/2 h-1/2 md:h-full bg-primary text-white flex justify-center items-center flex-col gap-y-5">
				<h1 className="uppercase text-2xl md:text-3xl font-semibold">
					Welcome to Hotel Booking App :)
				</h1>
				<p className="font-normal text-base">Plan your perfect stay with us!</p>
				<p className="font-normal text-base">
					Discover a wide range of hotels, explore room options, and find the
					best deals. With our user-friendly interface, you can quickly make
					reservations and manage your bookings hassle-free.
				</p>
			</div>

			<div className="w-full md:h-full md:w-1/2 text-center">
				<form onSubmit={handleSubmit}>
					<div className="md:w-8/12 lg:w-1/2 mx-auto flex justify-center items-center flex-col gap-y-5">
						<h1 className="uppercase text-2xl md:text-3xl font-semibold text-primary">
							Account login
						</h1>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Username"
							onChange={handleChange}
							required
							className="md:w-full px-6 py-1.5 border-2 border-primary rounded-lg font-normal text-base"
						/>
						<div className="relative md:w-full ">
							<input
								type={`${showPassword ? "text" : "password"}`}
								name="password"
								id="password"
								placeholder="Password"
								onChange={handleChange}
								required
								autoComplete="on"
								className="w-full px-6 py-1.5 border-2 border-primary rounded-lg font-normal text-base"
							/>
							{showPassword ? (
								<BsFillEyeSlashFill
									className="absolute right-5 top-3 text-lg hover:cursor-pointer"
									onClick={handleClick}
								/>
							) : (
								<BsFillEyeFill
									className="absolute right-5 top-3 text-lg hover:cursor-pointer"
									onClick={handleClick}
								/>
							)}
						</div>
						<button
							disabled={loading}
							className="md:w-full px-6 py-1.5 bg-primary text-white border-2 border-primary rounded-lg font-semibold text-base flex justify-center items-center gap-x-3 hover:bg-white hover:text-primary"
						>
							Login
						</button>
						{error && <span className="text-red-600">{error}</span>}
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
