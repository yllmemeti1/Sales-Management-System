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
          <label className="form-label">Emri dhe Mbiemri</label>
          <input
            className="form-input"
            type="text"
            name="surname"
            placeholder="Shkruani Emrin dhe Mbiemrin"
            value={values.surname}
            onChange={handleChange}
          />
          {errors.surname && <p>{errors.surname}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Shkruani Username"
            value={values.username}
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
          <label className="form-label">Numri i Telefonit</label>
          <input
            className="form-input"
            type="text"
            name="kontakti"
            placeholder="Kontakti"
            value={values.kontakti}
            onChange={handleChange}
          />
          {errors.kontakti && <p>{errors.kontakti}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Regjistrohu
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
