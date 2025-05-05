import React from 'react';
import programmeMai from '../../assets/programme-mai-2025.png';

import './Programme.scss';

const Programme = () => {
  return (
    <div className="programme">
      <div className="programme-container">
        <img src={programmeMai} className="programme-sizing" alt="programme" />
      </div>
    </div>
  );
};
export default Programme;
