import React, { useState } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "./styles/App.css";

const App = () => {
  const [markdown, setMarkdown] = useState(`# Heading`);

  return (
    <div className="app">
      <Editor markdown={markdown} onMarkdownChange={setMarkdown} />
      <Previewer markdown={markdown} />
    </div>
  );
};

export default App;

