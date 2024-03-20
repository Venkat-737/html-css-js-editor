import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [htmlCode, setHtmlCode] = useState(localStorage.getItem('htmlCode') || '');
  const [cssCode, setCssCode] = useState(localStorage.getItem('cssCode') || '');

  useEffect(()=>{
    localStorage.setItem('htmlCode',htmlCode);
  },[htmlCode]);

  useEffect(()=>{
    localStorage.setItem('cssCode',cssCode);
  },[cssCode]);

  const runCode = () => {
    const output = document.getElementById("outputDiv");
    const iframe = output.contentWindow.document;
    iframe.open();
    iframe.write(`
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>${htmlCode}</body>
      </html>
    `);
    iframe.close();
  

  const history = JSON.parse(localStorage.getItem('codeHistory')) || [];
  history.push({ html: htmlCode, css: cssCode });
  localStorage.setItem('codeHistory', JSON.stringify(history));

  
};
  return (
    <div className="container">
      <div className="code-container">
        <textarea
          className="editor"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
          placeholder="Enter HTML Code Here"
        ></textarea>
        <textarea
          className="editor"
          value={cssCode}
          onChange={(e) => setCssCode(e.target.value)}
          placeholder="Enter CSS Code Here"
        ></textarea>
        <div className="run-class">
          <button id="run-btn" onClick={runCode}>Run</button>
        </div>
      </div>
      <div className="output-container">
        <iframe id="outputDiv" title="output"></iframe>
      </div>
    </div>
  );
};

export default Home;
