import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate
import axios from "axios"; // Para realizar peticiones HTTP
import "../styles/pages/login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(""); // Para errores generales de autenticación
  const navigate = useNavigate(); // Inicializa el hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validación en tiempo real
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessages = { ...errors };

    switch (name) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errorMessages.email = emailRegex.test(value)
          ? ""
          : "Por favor, ingrese un correo válido.";
        break;

      case "password":
        errorMessages.password =
          value.length >= 6 ? "" : "La contraseña debe tener al menos 6 caracteres.";
        break;

      default:
        break;
    }

    setErrors(errorMessages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allFieldsValid = Object.values(errors).every((err) => err === "");
    const allFieldsFilled = Object.values(formData).every((field) => field.trim() !== "");

    if (allFieldsValid && allFieldsFilled) {
      try {
        // Enviar las credenciales al backend
        const response = await axios.post("http://localhost:5001/api/companies/login", formData);

        // Guardar el token en localStorage
        localStorage.setItem("token", response.data.token);

        // Redirigir al Dashboard o página principal
        navigate("/HomePage");
      } catch (error) {
        setErrorMessage(
          error.response?.data?.message || "Error al iniciar sesión. Inténtelo de nuevo."
        );
      }
    } else {
      setErrorMessage("Por favor, corrija los errores antes de continuar.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Inicio de Sesión</h2>
      {errorMessage && <p className="error">{errorMessage}</p>} {/* Mensaje de error general */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit" className="btn">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;


