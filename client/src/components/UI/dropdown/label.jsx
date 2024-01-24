// icons
import { ChevronDown, X } from "react-feather";

// component
const ClearFilterIcon = ({ onClick }) => {
  return (
    <X
      size={18}
      className="absolute right-[20px] rounded-full border border-neutral-500 bg-lightViolet bg-opacity-80 p-[3px] hover:bg-opacity-60"
      onClick={onClick}
    ></X>
  );
};

/**
 * Dropdown label element.
 *
 * If dropdown behaves as a filter it will display clear filter icon.
 *
 * @returns {JSX.Element} Returns a dropdown label element.
 */
export default function DropdownLabel({
  label,
  onLabelClick,
  isFilter,
  isSelected,
  onClearFilter,
}) {
  // -- handlers --

  const handleLabelClick = () => {
    onLabelClick();
  };

  const handleClearFilterClick = (e) => {
    e.stopPropagation();
    onClearFilter();
  };

  // -- render --

  return (
    <button
      className="relative flex h-full w-full items-center justify-between rounded border border-neutral-300 bg-neutral-100 px-4"
      onClick={handleLabelClick}
    >
      {label}

      {/* display clear-filter icon when dropdown is filter */}
      {isFilter && isSelected ? (
        <ClearFilterIcon onClick={handleClearFilterClick} />
      ) : (
        <ChevronDown size={14} />
      )}
    </button>
  );
}
