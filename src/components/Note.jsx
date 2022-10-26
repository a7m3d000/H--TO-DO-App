// Imports
import { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { removeNote } from "../redux/actions/actionsCreators";
import { VscChromeClose } from "react-icons/vsc";
import { BsCheckLg } from "react-icons/bs";

// Style
const Parent = styled.section`
  width: 100%;
  color: ${(props) => props.theme.primaryTextColorextColor};
  background-color: ${(props) => props.theme.primaryBackgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  font-size: 1.2rem;
  position: relative;

  span {
    width: 30px;
    height: 30px;
    background: ${(props) => props.theme.primaryBackgroundColor};
    border-radius: 50%;
    border: 1px solid #d0d0df8c;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: "";
      position: absolute;
      inset: -2px;
      border-radius: 50%;
      background-image: linear-gradient(0deg, #6cc0fc, #a475ed);
      display: none;
    }

    .checked-icon {
      color: #fff;
      font-size: 0.8rem;
      display: none;
    }

    &:hover {
      cursor: pointer;
      border: none;

      &::after {
        display: block;
      }
    }
  }

  .checked {
    background-image: linear-gradient(0deg, #6cc0fc, #a475ed);

    .checked-icon {
      display: block;
    }
  }

  p {
    margin: 0;
    text-align: start;
    flex-grow: 1;
    padding-left: 1rem;
  }

  .checked-note {
    text-decoration: line-through;
  }

  button {
    border-radius: 10px;
  }

  .close-icon {
    font-size: 27px;
    color: ${(props) => props.theme.closeIconColor};
    display: none;
    font-weight: lighter;

    &:hover {
      cursor: pointer;
    }
  }

  &:hover {
    .close-icon {
      display: block;
    }
  }
`;

// JSX
const Note = (props) => {
  const [checked, setChecked] = useState("");
  const [checkState, setCkeckState] = useState(true);
  const [checkedNote, setCkeckedNote] = useState("");
  const [cState, setCState] = useState("not-completed note");

  const checkedHandler = () => {
    setCkeckState(!checkState);

    if (checkState) {
      setChecked("checked");
      setCkeckedNote("checked-note");
      setCState("completed note");
    } else {
      setChecked("");
      setCkeckedNote("");
      setCState("not-completed note");
    }
  };

  return (
    <Parent className={cState}>
      <span className={checked} onClick={checkedHandler}>
        <BsCheckLg className="checked-icon" />
      </span>
      <p className={checkedNote}>{props.children}</p>
      <VscChromeClose
        className="close-icon"
        onClick={() => props.remove(props.id)}
      />
    </Parent>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => dispatch(removeNote(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
