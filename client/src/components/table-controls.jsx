// react
import { useState } from "react";

// router
import { useLocation } from "react-router-dom";

// components
import Dropdown from "./UI/dropdown/dropdown";
import SearchBar from "./UI/search";
import Checkbox from "./UI/checkbox";

// config
import { PARTNERS } from "../config/constants";

// helpers
import { getUniqueValuesByKey } from "../helpers";

/**
 * Dedicated controls for table element.
 *
 * @returns {JSX.Element} Retruns dropdown, search bar and checkbox elements.
 */
export default function TableControls({
  data,
  fetchData,
  filteredData,
  setFilteredData,
}) {
  // -- state --

  // unique list of compaines used for a filter in one of the dropdown elements
  const companies = getUniqueValuesByKey(data, "company");

  // signal to input elements to clear their input value if the state changes
  const [isResetControls, setIsResetControls] = useState(false);

  const { pathname } = useLocation();

  // -- render --

  return (
    <div className="mb-6 flex h-[34px] items-center text-sm text-neutral-800">
      <Dropdown className="mr-3 min-w-[130px]" items={PARTNERS} isNavigation />

      <SearchBar
        className="mr-3"
        data={data}
        fetchData={fetchData}
        isResetControls={isResetControls}
        setIsResetControls={setIsResetControls}
      />

      {/* do not render dropdown when on "/companies" path */}
      {pathname === "/companies" ? null : (
        <Dropdown
          className="mr-6 w-[200px]"
          label="Company"
          items={companies}
          data={data}
          fetchData={fetchData}
          isFilter
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          isResetControls={isResetControls}
          setIsResetControls={setIsResetControls}
        />
      )}

      <Checkbox
        fetchData={fetchData}
        filteredData={filteredData}
        isResetControls={isResetControls}
      />
    </div>
  );
}
