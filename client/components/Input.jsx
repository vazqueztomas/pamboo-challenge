import { useState } from "react";

const Input = () => {
  const [tareaNueva, setTareaNueva] = useState("");
  const onSubmitInput = async e => {
    e.preventDefault();
    await fetch("http://localhost:8080/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: Date.now(),
        titulo: tareaNueva,
        descripcion: "Esta es la descripción",
        estado: false,
      }),
    });
  };
  return (
    <div>
      <form onSubmit={e => onSubmitInput(e)}>
        <input
          type="text"
          value={tareaNueva}
          onChange={e => setTareaNueva(e.target.value)}
        />
        <button type="submit">Agregar tarea</button>
      </form>
    </div>
  );
};

export default Input;
