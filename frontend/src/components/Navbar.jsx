import React from 'react';
import './Navbar.css'; 
import { Link } from "react-router-dom";

const Navbar = () => {
  const displayCodeHistory = () => {
    const history = getCodeHistory(); 
    const historyList = document.getElementById("historyList");

    
    historyList.innerHTML = "";

    
    history.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.timestamp}: ${item.code}`;
      historyList.appendChild(listItem);
    });
  };

  const handleHistoryButtonClick = () => {
    displayCodeHistory();
  };

  return (
    <nav>
      <div className="history-option">
        <Link to="/history" className='historybtn' onClick={handleHistoryButtonClick}>History</Link>
      </div>
      <div className="login-option">
        <Link to="/" className='loginbtn'>Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
