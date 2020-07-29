import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
  const [extend, setExtend] = React.useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    if (note.title.length !== 0 || note.content.length !== 0) {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
    }
    event.preventDefault();
  }
  function pressEnter(event) {
    if (event.key === "Enter") {
      submitNote(event);
    }
    // event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          autoComplete="off"
          onKeyDown={pressEnter}
          style={{
            display: !extend && "none",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onKeyDown={pressEnter}
          onChange={handleChange}
          onClick={() => {
            // setExtend(!extend);
            setExtend(true);
          }}
          value={note.content}
          placeholder="Take a note..."
          rows={extend ? "3" : "1"}
        />
        <Zoom in={extend ? true : false}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
