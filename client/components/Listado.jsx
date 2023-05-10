import { useEffect, useState } from "react";

const Listado = () => {
  const [lista, setLista] = useState([]);

  const getTareas = async () => {
    const response = await fetch("http://localhost:8080/tasks");

    const tareas = await response.json();
    console.log(tareas);
    setLista(tareas);
  };

  useEffect(() => {
    getTareas();
  }, []);
  return (
    <div>
      <ul>
        {lista.map((e, i) => (
          <li key={i}>{e.titulo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listado;
