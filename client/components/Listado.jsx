import { useEffect, useState } from "react";
import TrashIcon from "./TrashIcon";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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

  const markTaskComplete = async id => {
    await fetch(`http://localhost:8080/tasks/${id}`, {
      method: "PUT",
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
        <List sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {lista.map((e, i) => (
            <ListItem
              sx={{ color: "white", borderColor: "white" }}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#1a1a1a",
                padding: "0 8px",
                borderRadius: "4px",
                color: "white",
              }}
              key={i}>
              <ListItemText
                onClick={() => markTaskComplete(e._id)}
                style={
                  e.estado
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
                sx={{ color: "white" }}
                primary={e.titulo}
              />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTarea(e._id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      ) : (
        <div>No hay elementos en la lista</div>
      )}
    </div>
  );
};

export default Listado;
