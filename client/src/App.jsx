import Listado from "../components/Listado";
import Input from "../components/Input";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        p={2}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        height={"100vh"}>
        <Typography variant="h4" align="center">
          Pamboo Challenge
        </Typography>
        <Listado />
        <Input />
      </Box>
    </ThemeProvider>
  );
}

export default App;
