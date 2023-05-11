import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "./Loader";

const Listado = ({ lista, getTareas, loading }) => {
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
    <Box width={["90%", "50%", "50%", "300px"]}>
      {loading ? (
        <Box display={"flex"} justifyContent={"center"}>
          <Loader />
        </Box>
      ) : null}

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
                padding: "8px 16px",
                borderRadius: "4px",
              }}
              key={i}>
              <ListItemText
                onClick={() => markTaskComplete(e._id)}
                style={
                  e.estado
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
                primary={e.titulo}
              />

              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTarea(e._id)}>
                <DeleteIcon color="error" />
              </IconButton>
            </ListItem>
          ))}
        </List>
      ) : (
        <div>
          <Typography variant="h6" my={3} align="center">
            No hay items en la lista
          </Typography>
        </div>
      )}
    </Box>
  );
};

export default Listado;
