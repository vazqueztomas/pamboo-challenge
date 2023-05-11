import { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Listado from "../components/Listado";
import Input from "../components/Input";
import panda from "../public/panda.png";
import { URL_SERVER } from "./config/constants";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTareas = async () => {
    setLoading(true);
    const response = await fetch(`${URL_SERVER}/tasks`);
    const tareas = await response.json();
    setLista(tareas);
    setLoading(false);
  };

  const addTarea = async tarea => {
    await fetch(`${URL_SERVER}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo: tarea,
        descripcion: "Esta es la descripción",
        estado: false,
      }),
    });
    getTareas();
  };

  useEffect(() => {
    getTareas();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        p={2}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        height={"100vh"}
        gap={4}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <img src={panda} style={{ width: "30%" }} />
          <Typography variant="h4" align="center">
            Pamboo Challenge
          </Typography>
        </Box>
        <Listado lista={lista} getTareas={getTareas} loading={loading} />
        <Input addTarea={addTarea} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
