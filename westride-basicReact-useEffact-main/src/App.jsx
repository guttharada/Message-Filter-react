import React, { useState } from 'react';
import userData from './userData';

import './App.css';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showData, setShowData] = useState(userData);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredData = userData.filter((user) =>
      `${user.first_name} ${user.last_name}`.toLowerCase().includes(term.toLowerCase())
    );
    setShowData(filteredData);
  };

  return (
    <div className='container'>
      <input
        type='text'
        placeholder='ค้นหาเพื่อน...'
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {showData.map((user) => (
          <li key={user.id}>{`${user.first_name} ${user.last_name}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
