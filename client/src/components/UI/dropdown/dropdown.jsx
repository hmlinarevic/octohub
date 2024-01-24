// react
import { useState, useEffect, useRef } from "react";

// router
import { useLocation, useNavigate } from "react-router-dom";

// lib
import clsx from "clsx";

// components
import DropdownLabel from "./label";

// helpers
import { filterByAttribute, modifyFirstLetter } from "../../../helpers";
import DropdownItems from "./items";

/**
 * Dropdown element used for either navigation or for filtering.
 *
 * @returns {JSX.Element} Returns a dropdown element with a label and items.
 */
export default function Dropdown({
  className,
  label,
  items,
  data,
  fetchData,
  isNavigation,
  isFilter,
  setFilteredData,
  setIsResetControls,
}) {
  // -- state --

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  // reference for the dropdown element to manage its visibility and behavior
  const dropdownRef = useRef(null);

  const { pathname } = useLocation();

  // use navigate to chage the path in the browser
  const navigate = useNavigate();

  // -- handlers --

  const handleLabelClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleItemClick = (e) => {
    const target = e.target.innerText;

    // dropdown navigation behaviour -> updates the pathname
    if (isNavigation) {
      target === "Contacts" && navigate("/contacts");
      target === "Companies" && navigate("/companies");
    }

    // dropdown filtering behaviour -> updates filtered data
    if (isFilter) {
      setFilteredData(filterByAttribute(data, "company", target));
    }

    // update dropdown
    setIsOpen(false);
    setSelected(e.target.innerText);
  };

  // handles closing the dropdown if clicked outside
  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  /*
    after filter is cleared we fetch contacts data, close the dropdown, and
    reset the search bar and checkbox through the parents reset-controls state
  */
  const handleClearFilter = () => {
    // default to contacts state
    fetchData(`/contacts`);
    setFilteredData(null);

    // toggle dropdown
    setSelected("");
    setIsOpen(false);

    // clear search bar and toggle checkbox
    setIsResetControls(true);
  };

  // -- effects --

  // close dropdown if clicked outside
  useEffect(() => {
    // adding click event listener
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      // cleanup the event listener
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // update the label name when pathname changes if dropdown is navigation
  useEffect(() => {
    if (isNavigation) {
      // (e.g. "/contacts" -> Contacts)
      setSelected(modifyFirstLetter(pathname.substring(1)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // -- render --

  return (
    <div ref={dropdownRef} className={clsx("relative h-full", className)}>
      <DropdownLabel
        label={selected ? selected : label || items[0]}
        onLabelClick={handleLabelClick}
        isFilter={isFilter}
        isSelected={selected}
        onClearFilter={handleClearFilter}
      />

      {/* container with dropdown items */}
      <DropdownItems
        isOpen={isOpen}
        items={items}
        handleItemClick={handleItemClick}
        isFilter={isFilter}
      />
    </div>
  );
}
