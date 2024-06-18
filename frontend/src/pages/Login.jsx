import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import WelcomeBanner from "../components/common/WelcomeBanner";
import UsernameInput from "../components/common/UsernameInput";
import UserPasswordInput from "../components/common/UserPasswordInput";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post(
        "https://react-hotel-enroll.onrender.com/api/auth/login",
        credentials
      );
      console.log("res", res);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate(-1);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      console.error(err);
    }
  };

  return (
    <div className="h-screen flex items-baseline text-center flex-col md:flex-row gap-y-20 overflow-hidden">
      <WelcomeBanner />

      <div className="w-full md:h-full md:w-1/2 text-center">
        <form onSubmit={handleSubmit}>
          <div className="md:w-8/12 lg:w-1/2 mx-auto flex justify-center items-center flex-col gap-y-5">
            <h1 className="uppercase text-2xl md:text-3xl font-semibold text-primary">
              Account login
            </h1>
            <p className="text-base">
              New user?{" "}
              <Link to="/register">
                <span className="text-primary underline">Sign up here</span>
              </Link>
            </p>

            <UsernameInput
              credentials={credentials}
              handleChange={handleChange}
            />
            <UserPasswordInput
              credentials={credentials}
              handleChange={handleChange}
            />

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
