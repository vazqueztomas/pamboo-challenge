import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const Input = ({ addTarea }) => {
  const [tareaNueva, setTareaNueva] = useState("");

  const onSubmitInput = async e => {
    e.preventDefault();
    if (tareaNueva == "") return;
    await addTarea(tareaNueva);
    setTareaNueva("");
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
