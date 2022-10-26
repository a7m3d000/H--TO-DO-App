// Imports
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import { useState } from "react";
import Body from "./components/Body";

// Style
const Parent = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 0 3rem 0;

  @media screen and (max-width: 576px) {
    top: 3rem;
  }
`;

// JSX
function App() {
  const [addBtnColor, setAddBtnColor] = useState("dark");

  const [theme, setTheme] = useState({
    primaryBackgroundColor: "#fff",
    primaryTextColorextColor: "#5e606d",
    borderColor: "#cbcdd48f",
    closeIconColor: "#6a6977",
    boxShadow: "#7777771c",
  });

  const themeHandler = (state) => {
    if (state) {
      setTheme({
        primaryBackgroundColor: "#fff",
        primaryTextColorextColor: "#5e606d",
        borderColor: "#cbcdd48f",
        closeIconColor: "#6a6977",
        boxShadow: "#7777771c",
      });
      
      setAddBtnColor("dark");
    } else {
      setTheme({
        primaryBackgroundColor: "#25273c",
        primaryTextColorextColor: "#acaec8",
        borderColor: "#373a4f",
        closeIconColor: "#53556e",
        boxShadow: "#0e0e14a6",
      });

      setAddBtnColor("success");
    }
  };

  return (
    <Parent>
      <ThemeProvider theme={theme}>
        <Header mainThemeHandler={themeHandler} />
        <NoteInput addBtnColor={addBtnColor} />
        <Body />
      </ThemeProvider>
    </Parent>
  );
}

export default App;
