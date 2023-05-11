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
import { AnimatePresence, motion } from "framer-motion";
import { URL_SERVER } from "../src/config/constants";

const Listado = ({ lista, getTareas, loading }) => {
  const deleteTarea = async id => {
    await fetch(`${URL_SERVER}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    getTareas();
  };

  const markTaskComplete = async id => {
    await fetch(`${URL_SERVER}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    getTareas();
  };
  return (
    <Box
      width={["90%", "50%", "50%", "300px"]}
      maxHeight="40%"
      overflow={"auto"}>
      {loading ? (
        <Box display={"flex"} justifyContent={"center"}>
          <Loader />
        </Box>
      ) : null}
      <AnimatePresence initial={false}>
        {lista.length > 0 ? (
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}>
            {lista.map((e, i) => (
              <motion.div
                key={e._id}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.2, delay: i * 0.1 }}>
                <ListItem
                  sx={{
                    color: "white",
                    borderColor: "white",
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#1a1a1a",
                    padding: "8px 16px",
                    borderRadius: "4px",
                  }}>
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
              </motion.div>
            ))}
          </List>
        ) : (
          <div>
            <Typography variant="h6" my={3} align="center">
              No hay items en la lista
            </Typography>
          </div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Listado;
