import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

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
    <form onSubmit={e => onSubmitInput(e)}>
      <Box display={"flex"} justifyContent="space-between">
        <TextField
          id="outlined-basic"
          label="Ingresar tarea nueva"
          variant="outlined"
          onChange={e => setTareaNueva(e.target.value)}
          value={tareaNueva}
          inputProps={{ style: { color: "white" } }}
        />

        <Button variant="contained" type="submit" size="large">
          Agregar tarea
        </Button>
      </Box>
    </form>
  );
};

export default Input;