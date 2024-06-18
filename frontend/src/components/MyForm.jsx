import React, { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });

    //  validate form fields
    validateField(name, value);
  };

  const validateField = (field, value) => {
    let error = "";

    switch (field) {
      case "name":
        if (!value.trim()) {
          error = "Name is Required!";
        }
        break;
      case "email":
        if (!value.trim() || validateEmail(value)) {
          error = "Invalid email address";
        }
        break;
      case "password":
        if (!value.trim() || value.length < 8) {
          error = "Password must be of minimum 8 characters";
        }
        break;
      default:
        break;
    }

    // set errors
    setError((prevError) => ({
      ...prevError,
      [field]: error,
    }));
  };

  // form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    validateForm();

    console.log("Form is validate and submitted successfully");
  };

  const validateForm = () => {
    validateField("name", formData.name);
    validateField("email", formData.email);
    validateField("password", formData.password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
      </div>

      <div>
        <label htmlFor="emaiil">Email: </label>
        <input
          type="email"
          id="email"
          name="emaiil"
          value={formData.email}
          onChange={handleChange}
        />
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {error.password && <p style={{ color: "red" }}>{error.password}</p>}
      </div>
    </form>
  );
}

export default MyForm;
