// Actions
import { ADD_NOTE } from "./actions";
import { REMOVE_NOTE } from "./actions";
import { CLEAR_NOTES } from "./actions";

export const addNote = (text) => {
  return {
    type: ADD_NOTE,
    text,
  };
};

export const removeNote = (id) => {
  return {
    type: REMOVE_NOTE,
    id,
  };
};

export const clearNotes = () => {
  return {
    type: CLEAR_NOTES,
  };
};
