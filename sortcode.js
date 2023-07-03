import React, { useState } from 'react';

const SortCodeInput = () => {
  const [sortCode, setSortCode] = useState(['', '', '']);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const newSortCode = [...sortCode];
    newSortCode[index] = value;

    setSortCode(newSortCode);

    if (value.length === 2 && index < 2) {
      e.target.nextSibling.focus();
    }
  };

  const handleKeyPress = (e) => {
    const { key } = e;

    if (!/[0-9]/.test(key)) {
      e.preventDefault();
    }
  };

  return (
    <div>
      {sortCode.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          onChange={(e) => handleInputChange(e, index)}
          onKeyPress={handleKeyPress}
          maxLength={2}
        />
      ))}
    </div>
  );
};

export default SortCodeInput;
