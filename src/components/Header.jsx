// Imports
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useState } from "react";
import lightIcon from "../images/light-icon.png";
import darkIcon from "../images/dark-icon.png";
import { useEffect } from "react";
import lightBg from "../images/light-bg.jpg";
import darkBg from "../images/dark-bg.jpg";

// Style
const Parent = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;

  h3 {
    color: #fff;
    font-family: "Major Mono Display";
  }

  .theme-icon {
    width: 30px;
    height: 30px;

    &:hover {
      cursor: pointer;
    }
  }
`;

// JSX
const Header = ({ mainThemeHandler }) => {
  const [themeIcon, setThemeIcon] = useState(darkIcon);
  const [themeState, setThemeState] = useState(false);

  useEffect(() => {
    if (themeState) {
      document.body.style.backgroundColor = "#181824";
      document.body.style.backgroundImage = `url(${darkBg})`;
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#181824");
    } else {
      document.body.style.backgroundColor = "#fafafa";
      document.body.style.backgroundImage = `url(${lightBg})`;
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#fafafa");
    }
  }, [themeState]);

  const themeIconHandler = () => {
    setThemeIcon(themeIcon == lightIcon ? darkIcon : lightIcon);
  };

  const themeHandler = () => {
    if (themeState) {
      mainThemeHandler(true);
    } else {
      mainThemeHandler(false);
    }
  };

  // JSX
  return (
    <Container className="c">
      <Parent>
        <h3>P.Y TO DO LIST</h3>
        <img
          src={themeIcon}
          alt=""
          onClick={() => {
            themeIconHandler();
            themeHandler();
            setThemeState(!themeState);
          }}
          className="theme-icon"
        />
      </Parent>
    </Container>
  );
};

export default Header;
