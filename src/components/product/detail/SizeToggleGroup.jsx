// SizeToggleGroup.js
import { useState } from 'react';

const SizeToggleGroup = ({ sizes, onChange }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    setSelectedSize(newSize);
    onChange(newSize);
  };

  return (
    <div className="flex space-x-4">
      {sizes.map((size) => (
        <label
          key={size}
          className={`flex items-center justify-center rounded-md px-4 py-2 border ${
            selectedSize === size
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
          }`}
        >
          <input
            type="radio"
            value={size}
            checked={selectedSize === size}
            onChange={handleSizeChange}
            className="hidden"
          />
          {size}
        </label>
      ))}
    </div>
  );
};

export default SizeToggleGroup;
