import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { HashRouter } from "react-router-dom";
import Lessons from "./pages/Lessons";

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Container maxWidth="md">
          <Lessons />
        </Container>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
