import React, { useEffect, useState } from "react";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

marked.setOptions({
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code).value;
    } else {
      return hljs.highlightAuto(code).value;
    }
  },
});

const Previewer = ({ markdown }) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    setHtml(marked(markdown));
  }, [markdown]);

  return (
    <div
      className="previewer"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Previewer;
