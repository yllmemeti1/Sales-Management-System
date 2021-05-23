import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";
import { Link } from "react-router-dom";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>
          Filloni me ne sot! Krijoni llogarinë tuaj duke plotësuar informacionet
          më poshtë.
        </h1>
        <div className="form-inputs">
          <label className="form-label">Emri</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Shkruani Emrin tuaj"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Mbiemri</label>
          <input
            className="form-input"
            type="text"
            name="surname"
            placeholder="Shkruani Mbiemrin tuaj"
            value={values.surname}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Shkruani email-in tuaj"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Shkruani password-in tauj"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Konfirmo Password-in</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Konfirmoni password-in tuaj"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Aplikoni per regjistrim
        </button>
        <span className="form-input-login">
          Posedoni një llogari? Kyquni{" "}
          <Link to="/login">
            <p>këtu</p>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
