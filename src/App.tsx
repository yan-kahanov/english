import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { HashRouter, Route, Routes } from "react-router-dom";
import LessonMenu from "./pages/LessonMenu";
import Lessons from "./pages/Lessons";
import Theory from "./pages/Theory";

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
            <Routes>
              <Route path="/" element={<Lessons />}/>
              <Route path="/lessons/:id" element={<LessonMenu />}/>
              <Route path="/theory/:id" element={<Theory />}/>
            </Routes>
        </Container>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
