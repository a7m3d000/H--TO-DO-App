const notesReducer = (state = [], action) => {
  let notes = state;

  switch (action.type) {
    case "ADD_NOTE":
      notes = [...state, { text: action.text, key: Math.random() }];
      break;

    case "REMOVE_NOTE":
      notes = state.filter((note) => note.key !== action.id);
      break;

    case "CLEAR_NOTES":
      notes = [];
      break;
  }

  return notes;
};

export default notesReducer;
