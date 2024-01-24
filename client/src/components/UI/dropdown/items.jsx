// lib
import clsx from "clsx";

// component
const DropdownItem = ({ onClick, children }) => {
  return (
    <button
      className={
        "w-full cursor-pointer select-none border-b px-4 py-1 text-left last-of-type:border-none hover:bg-neutral-200"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

/**
 * DropdownItems Component
 *
 * Renders a dropdown list of items. The dropdown is conditionally rendered based on the `isOpen` prop.
 */
export default function DropdownItems({ isOpen, items, handleItemClick }) {
  return (
    <div
      className={clsx(
        isOpen ? "" : "hidden",
        "absolute top-[calc(100%+3px)] w-full rounded border border-neutral-300 bg-neutral-100",
      )}
    >
      {items.map((item, i) => (
        <DropdownItem key={`${i}-${item}`} onClick={handleItemClick}>
          {item}
        </DropdownItem>
      ))}
    </div>
  );
}
