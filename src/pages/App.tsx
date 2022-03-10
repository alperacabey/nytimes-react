import React from "react";
import { ThemeProvider } from "styled-components";
import { Header, Container } from "../components/common/styled"
import Router from '../router'
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from "../theme";

type ThemeTypes = "dark" | "light";

const App = () => {
  const [theme, setTheme] = React.useState<ThemeTypes>("light");

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme &&
      (localTheme === "light" || localTheme === "dark") &&
      setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header>
          <h3>"The New York Times" article search application</h3>
      </Header>
      <Container data-test="app-container">
        <Router />
      </Container>
    </ThemeProvider>
  );
};

export default App;
