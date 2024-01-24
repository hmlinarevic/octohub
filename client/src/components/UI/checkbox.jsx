// react
import { useState, useEffect } from "react";

// router
import { useLocation } from "react-router-dom";

/**
 * Renders a checkbox that triggers a fetch operation on change.
 *
 * @returns {JSX.Element} A label element containing the checkbox input.
 */

export default function Checkbox({ fetchData, isResetControls }) {
  // -- state --

  const [isChecked, setIsChecked] = useState(false);

  // track the pathname (e.g '/contacts') in the browser
  const { pathname } = useLocation();

  // -- handlers --

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;

    setIsChecked(isChecked);

    const queryString = `${isChecked ? "?recent=true" : ""}`;
    fetchData(`${pathname}${queryString}`);
  };

  // -- effects --

  // reset checkbox when pathname changes (e.g. "/contacts" -> "/companies")
  useEffect(() => setIsChecked(false), [pathname]);

  // reset when filter is cleared
  useEffect(() => {
    if (isResetControls) {
      setIsChecked(false);
    }
  }, [isResetControls]);

  // -- render --

  return (
    <label
      htmlFor="recently-added"
      className="flex cursor-pointer select-none items-center"
    >
      recently added
      <input
        className="ml-2 cursor-pointer rounded-xl"
        type="checkbox"
        name="recently-added"
        id="recently-added"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </label>
  );
}
