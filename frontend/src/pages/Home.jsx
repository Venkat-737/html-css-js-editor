import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [htmlCode, setHtmlCode] = useState(localStorage.getItem('htmlCode') || '');
  const [cssCode, setCssCode] = useState(localStorage.getItem('cssCode') || '');
  const [jsCode, setJsCode] = useState(localStorage.getItem('jsCode') || '');

  useEffect(() => {
    localStorage.setItem('htmlCode', htmlCode);
  }, [htmlCode]);

  useEffect(() => {
    localStorage.setItem('cssCode', cssCode);
  }, [cssCode]);

  useEffect(() => {
    localStorage.setItem('jsCode', jsCode);
  }, [jsCode]);

  const runCode = () => {
    const output = document.getElementById("outputDiv");
    const iframe = output.contentWindow.document;
  
    iframe.open();
    iframe.write(`
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>
            try {
              eval(\`${jsCode}\`);
            } catch (error) {
              document.body.innerHTML += '<div style="color: red; white-space: pre-wrap;">' + error.message + '</div>';
            }
          </script>
        </body>
      </html>
    `);
    iframe.close();
  
    const history = JSON.parse(localStorage.getItem('codeHistory')) || [];
    history.push({ html: htmlCode, css: cssCode, js: jsCode });
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
        <textarea
          className="editor js-editor"
          value={jsCode}
          onChange={(e) => setJsCode(e.target.value)}
          placeholder="Enter JavaScript Code Here"
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
