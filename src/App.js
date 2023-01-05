import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./components/ThemeStyled";
import Info from "./pages/Info/Info";

function App() {

  return (
    <ThemeProvider theme={theme}>
        <Info/>
    </ThemeProvider>
  );
}



export default App;
