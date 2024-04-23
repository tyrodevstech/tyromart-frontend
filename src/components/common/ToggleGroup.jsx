// ToggleGroup.js
import React, {
  useState,
  Children,
  useEffect,
  useContext,
  createContext,
} from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const ToggleGroupContext = createContext({
  size: "default",
  variant: "default",
});
const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const ToggleGroup = ({
  children,
  onItemChange,
  defaultSelected,
  className,
  variant,
  size,
  ...props
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
    onItemChange(selectedItem);
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
      className={cn("flex items-center justify-center gap-1", className)}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <ToggleGroupContext.Provider
        value={{
          variant,
          size,
          selectedItem,
          setSelectedItem,
        }}
      >
        {children}
      </ToggleGroupContext.Provider>
    </div>
  );
};

const ToggleItem = ({
  className,
  value,
  children,
  variant,
  size,
  ...props
}) => {
  const context = useContext(ToggleGroupContext);

  return (
    <div
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
      data-state={context.selectedItem === value ? "on" : "off"}
      onClick={() => context.setSelectedItem(value)}
    >
      {children}
    </div>
  );
};

export { ToggleGroup, ToggleItem };
