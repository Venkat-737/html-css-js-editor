import React, { useEffect, useRef, useState } from 'react';
import './History.css';

const History = () => {
  const [copied, setCopied] = useState(null);
  const history = JSON.parse(localStorage.getItem('codeHistory')) || [];
  const historyRef = useRef(null);

  const copyToClipboard = (code, index, type) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopied({ index, type });
        setTimeout(() => setCopied(null), 2000);
      })
      .catch(err => alert('Failed to copy code: ' + err));
  };

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className='all'>
      <h2 className='heading'>Code Execution History</h2>
      <ul className='each' ref={historyRef}>
        {history.map((item, index) => (
          <li key={index}>
            <h3>Execution {index + 1}</h3>
            <div>
              <strong className='t1'>
                HTML
                <button 
                  className="copy-button" 
                  onClick={() => copyToClipboard(item.html, index, 'html')}
                >
                  {copied?.index === index && copied.type === 'html' ? 'Copied!' : 'Copy '}
                </button>
              </strong>
              <pre>{item.html}</pre>
            </div>
            <div>
              <strong className='t2'>
                CSS
                <button 
                  className="copy-button" 
                  onClick={() => copyToClipboard(item.css, index, 'css')}
                >
                  {copied?.index === index && copied.type === 'css' ? 'Copied!' : 'Copy'}
                </button>
              </strong>
              <pre>{item.css}</pre>
            </div>
            <div>
              <strong className='t3'>
                JavaScript
                <button 
                  className="copy-button" 
                  onClick={() => copyToClipboard(item.js, index, 'js')}
                >
                  {copied?.index === index && copied.type === 'js' ? 'Copied!' : 'Copy'}
                </button>
              </strong>
              <pre>{item.js}</pre>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
