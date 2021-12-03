// Imports
import { useState } from "react";
import { Container, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";
import Note from "./Note";
import { clearNotes } from "../redux/actions/actionsCreators";

// Style
const Parent = styled.section`
  width: 100%;
  border-radius: 7px;
  overflow: hidden;
  display: flex;
  jusify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.primaryBackgroundColor};
  box-shadow: 15px 15px 50px ${(props) => props.theme.boxShadow};

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding: 1.3rem;
    padding-top: 2rem;
    width: 100%;
    color: ${(props) => props.theme.primaryTextColorextColor};

    a {
      font-size: 1.1rem;
      text-decoration: none;
      font-weight: 550;
      letter-spacing: 1px;

      .clear {
        padding: 0.6rem;
        border-radius: 10px;
      }
    }

    .notes-num {
      font-size: 1.05rem;
    }
  }

  .notes {
    width: 100%;
    display: flex;
    jusify-content: center;
    align-items: center;
    gap: 15px;
    flex-direction: column;
  }
`;

// JSX
const Body = (props) => {
  const [completedState, setCompletedState] = useState([]);

  const completedNotesHandler = (comp) => {
    setCompletedState(comp);
  };

  return (
    <Container>
      <Parent>
        <div className="notes">
          {props.state
            ? props.state
                .map((n) => (
                  <Note
                    id={n.key}
                    completedNotesHandler={completedNotesHandler}
                    comState={completedState}
                  >
                    {n.text}
                  </Note>
                ))
                .reverse()
            : ""}
        </div>
        <div className="bottom">
          <span href="#" className="notes-num">
            You Have{" "}
            <Badge bg="primary">{props.state ? props.state.length : 0}</Badge>{" "}
            Notes
          </span>
          <a href="#" onClick={() => props.clear()}>
            <Badge bg="danger" className="clear">
              clear
            </Badge>
          </a>
        </div>
      </Parent>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clear: () => dispatch(clearNotes()),
  };
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
