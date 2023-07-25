import React from "react";

const Editor = ({ markdown, onMarkdownChange }) => {
  const handleChange = (event) => {
    onMarkdownChange(event.target.value);
  };

  return (
    <div className="editor">
      <textarea value={markdown} onChange={handleChange} />
    </div>
  );
};

export default Editor;


