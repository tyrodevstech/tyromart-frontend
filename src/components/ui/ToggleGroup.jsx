// ToggleGroup.js
import React, { useState, Children, cloneElement, useEffect } from "react";

const ToggleGroup = ({
  children,
  onItemChange,
  defaultSelected,
  groupClassName,
}) => {
  const [selectedItem, setSelectedItem] = useState(defaultSelected);

  const handleItemChange = (newItem) => {
    setSelectedItem(newItem);
    onItemChange(newItem);
  };

  const handleKeyDown = (event) => {
    const currentIndex = Children.toArray(children).findIndex(
      (child) => child.props.value === selectedItem
    );

    switch (event.key) {
      case "ArrowLeft":
        if (currentIndex > 0) {
          handleItemChange(
            Children.toArray(children)[currentIndex - 1].props.value
          );
        }
        break;
      case "ArrowRight":
        if (currentIndex < Children.count(children) - 1) {
          handleItemChange(
            Children.toArray(children)[currentIndex + 1].props.value
          );
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleItemChange(selectedItem);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [selectedItem]);

  useEffect(() => {
    setSelectedItem(defaultSelected);
  }, [defaultSelected]);

  return (
    <div
      className={`flex space-x-4 ${groupClassName}`}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      {Children.map(children, (child) =>
        cloneElement(child, {
          isSelected: selectedItem === child.props.value,
          onItemChange: () => handleItemChange(child.props.value),
        })
      )}
    </div>
  );
};

const ToggleItem = ({
  value,
  isSelected,
  onItemChange,
  children,
  className,
}) => {
  const handleItemClick = () => {
    onItemChange(value);
  };
  console.log(className);

  return (
    <div
      tabIndex="0"
      className={`${className} rounded-md px-4 py-2 border cursor-pointer data-[state=on]:bg-blue-500 data-[state=on]:text-white bg-gray-200 text-gray-700 hover:bg-gray-100 `}
      data-state={isSelected ? "on" : "off"}
      onClick={handleItemClick}
    >
      {children}
    </div>
  );
};

export { ToggleGroup, ToggleItem };
