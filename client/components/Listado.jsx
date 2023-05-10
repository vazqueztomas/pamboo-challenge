import { useEffect, useState } from "react";
import TrashIcon from "./TrashIcon";

const Listado = () => {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTareas();
  }, []);

  const getTareas = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:8080/tasks");
    const tareas = await response.json();
    setLista(tareas);
    setLoading(false);
  };

  const deleteTarea = async id => {
    await fetch(`http://localhost:8080/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    getTareas();
  };

  return (
    <div>
      {loading ? <div>Cargando...</div> : null}
      {lista.length > 0 ? (
        <ul style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {lista.map((e, i) => (
            <li
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#1a1a1a",
                padding: "0 8px",
              }}
              key={i}>
              <p>{e.titulo}</p>
              <div onClick={() => deleteTarea(e._id)}>
                <TrashIcon />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No hay elementos en la lista</div>
      )}
    </div>
  );
};

export default Listado;
