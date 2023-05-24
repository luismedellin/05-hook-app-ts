import { useEffect, useState } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";
export const FormWithCustomHook = () => {
  
  const {username, email, password, onInputChange} = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="luis@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      
      <input
        type="password"
        className="form-control mt-2"
        name="password"
        placeholder="Contraseña "
        value={password}
        onChange={onInputChange}
      />
    </>
  );
};
