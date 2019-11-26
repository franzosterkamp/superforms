import React from "react";
import CardForm from "./components/CardForm";
import { ThemeProvider } from "emotion-theming";
import themes from "./components/Theme";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <CardForm></CardForm>
    </ThemeProvider>
  );
}

export default App;
