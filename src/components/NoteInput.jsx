// Imports
import styled from "styled-components";
import { Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addNote } from "../redux/actions/actionsCreators";
import { useState } from "react";

// Style
const Parent = styled.section`
  position: relative;

  .note-input {
    width: 650px;
    border-radius: 7px;
    padding: 2rem;
    padding-right: 5rem;
    padding-left: 1rem;
    border: none;
    height: 60px;
    background: ${(props) => props.theme.primaryBackgroundColor};
    color: ${(props) => props.theme.primaryTextColorextColor};
    border: 1px solid ${(props) => props.theme.borderColor};
    box-shadow: 15px 15px 50px #7777771c;
    box-shadow: 15px 15px 50px ${(props) => props.theme.boxShadow};
  }

  .add-button {
    position: absolute;
    top: 10px;
    right: 1.1rem;
    height: calc(100% - 20px);
    border-radius: 10px;
    padding-left: 1rem;
    padding-right: 1rem;
    background-image: linear-gradient(0deg, #6cc0fc, #a475ed);
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
  }

  .btn-check:focus + .btn,
  .btn:focus {
    box-shadow: 0 0 0 0.25rem #9d7eef70;
  }

  @media screen and (max-width: 768px) {
    .note-input {
      width: 600px;
    }
  }

  @media screen and (max-width: 576px) {
    .note-input {
      width: 400px;
    }
  }

  @media screen and (max-width: 375px) {
    .note-input {
      width: 330px;
    }
  }

  @media screen and (max-width: 320px) {
    .note-input {
      width: 296px;
    }
  }
`;

// JSX
const NoteInput = (props) => {
  let [note, setNote] = useState("");

  return (
    <Parent>
      <Container className="c">
        <form
          onSubmit={(e) => {
            props.add(note);
            setNote("");
            e.preventDefault();
          }}
        >
          <Form.Control
            className="note-input"
            size="lg"
            type="text"
            placeholder="Add a Note..."
            onChange={(e) => setNote(e.target.value)}
            value={note}
          />
        </form>
        <Button
          variant={props.addBtnColor}
          className="add-button"
          onClick={() => {
            props.add(note);
            setNote("");
          }}
        >
          Add
        </Button>
      </Container>
    </Parent>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (text) => dispatch(addNote(text)),
  };
};

export default connect(null, mapDispatchToProps)(NoteInput);
