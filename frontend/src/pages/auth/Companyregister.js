import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css"

const Companyregister = () => {
  const [empresa, setEmpresa] = useState({
    nombre: "",
    cif: "",
    sector: "",
    tamano: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpresa({ ...empresa, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5001/api/companies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(empresa), // Asegúrate de que 'empresa' contiene los datos correctos
      });
  
      if (!response.ok) {
        throw new Error("Error al enviar los datos al backend");
      }
  
      const data = await response.json();
      console.log("Respuesta del backend:", data);
  
      // Redirigir al usuario después de un envío exitoso
      navigate("/CompanyLogin");
    } catch (error) {
      console.error("Hubo un problema con la solicitud:", error);
    }
  };
  

  return (
    <div className="register-container">
      <h2>Regístrate como Empresa</h2>
      <form onSubmit={handleSubmit}>
  <label>
    Nombre de la Empresa:
    <input
      type="text"
      name="nombre"
      value={empresa.nombre}
      onChange={handleChange}
      required
    />
  </label>
  <label>
    CIF:
    <input
      type="text"
      name="cif" // ✅ corregido
      value={empresa.cif} // ✅ corregido
      onChange={handleChange}
      required
    />
  </label>
  <label>
    Sector:
    <input
      type="text"
      name="sector"
      value={empresa.sector}
      onChange={handleChange}
      required
    />
  </label>
  <label>
    Tamaño de la Empresa:
    <select
      name="tamano"
      value={empresa.tamano}
      onChange={handleChange}
      required
    >
      <option value="">Selecciona una opción</option>
      <option value="pequeña">Pequeña (1-50 empleados)</option>
      <option value="mediana">Mediana (51-250 empleados)</option>
      <option value="grande">Grande (+250 empleados)</option>
    </select>
  </label>
  <label>
    Email:
    <input
      type="email"
      name="email"
      value={empresa.email}
      onChange={handleChange}
      required
    />
  </label>
  <label>
    Contraseña:
    <input
      type="password"
      name="password"
      value={empresa.password}
      onChange={handleChange}
      required
    />
  </label>
  <button type="submit" className="btn-submit">
    Registrarse
  </button>
</form>

    </div>
  );
};

export default Companyregister;
