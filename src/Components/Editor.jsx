import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/theme/material.css";
import { useState } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = (props) => {
  const [open, setOpen] = useState(true);
  const { displayName, language, value, onChange } = props;
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button className="open-close" onClick={() => setOpen(!open)}>
          {open ? (
            <i className="fa-solid fa-arrows-left-right-to-line"></i>
          ) : (
            <i className="fa-solid fa-arrows-left-right"></i>
          )}
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
};

export default Editor;
