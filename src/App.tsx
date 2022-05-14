import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { HashRouter, Route, Routes } from "react-router-dom";
import LessonMenu from "./pages/LessonMenu";
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
            <Routes>
              <Route path="/" element={<Lessons />}/>
              <Route path="/lessons/:id" element={<LessonMenu />}/>
            </Routes>
        </Container>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
