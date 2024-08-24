import React from 'react';
import './History.css';

const History = () => {
    
    
  const history = JSON.parse(localStorage.getItem('codeHistory')) || [];

  return (
    <div className='all'>
      <h2 className='heading'>Code Execution History</h2>
      <ul className='each'>
        {history.map((item, index) => (
          <li key={index}>
            <h3 >Execution {index + 1}</h3>
            <div>
              <strong >HTML:</strong> <pre>{item.html}</pre>
            </div>
            <div>
              <strong>CSS:</strong> <pre>{item.css}</pre>
            </div>
            <div>
              <strong>JavaScript:</strong> <pre>{item.js}</pre>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
