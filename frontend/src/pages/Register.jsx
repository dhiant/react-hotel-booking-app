import React, { useState } from "react";
import WelcomeBanner from "../components/common/WelcomeBanner";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UsernameInput from "../components/common/UsernameInput";
import UserPasswordInput from "../components/common/UserPasswordInput";
import UserEmailInput from "../components/common/UserEmailInput";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const navigate = useNavigate();

  console.log(
    typeof credentials.username,
    typeof credentials.password,
    typeof credentials.email
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://react-hotel-enroll.onrender.com/api/auth/register",
        credentials
      );
      console.log(res);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };
  return (
    <div className="h-screen flex items-baseline text-center flex-col md:flex-row gap-y-20 overflow-hidden">
      <WelcomeBanner />

      <div className="w-full md:h-full md:w-1/2 text-center">
        <form onSubmit={handleSubmit}>
          <div className="md:w-8/12 lg:w-1/2 mx-auto flex justify-center items-center flex-col gap-y-5">
            <h1 className="uppercase text-2xl md:text-3xl font-semibold text-primary">
              Account Register
            </h1>
            <p className="text-base">
              Registered user?{" "}
              <Link to="/login">
                <span className="text-primary underline">Sign in here</span>
              </Link>
            </p>

            <UsernameInput
              credentials={credentials}
              handleChange={handleChange}
            />
            <UserEmailInput
              credentials={credentials}
              handleChange={handleChange}
            />
            <UserPasswordInput
              credentials={credentials}
              handleChange={handleChange}
            />

            <button className="md:w-full px-6 py-1.5 bg-primary text-white border-2 border-primary rounded-lg font-semibold text-base flex justify-center items-center gap-x-3 hover:bg-white hover:text-primary">
              Register
            </button>

            {error && <span className="text-red-600">{error}</span>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
