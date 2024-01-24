// react
import { useState, useEffect } from "react";

// router
import { useLocation } from "react-router-dom";

// components
import TableControls from "./components/table-controls";
import Table from "./components/table";

// hooks
import useFetch from "./hooks/useFetch";

// config
import { API_BASE_URL } from "./config/constants";

/**
 * OctoHub App.
 * Implements CRM feature: view data (partners) in a table format.
 *
 * @returns {JSX.Element} Table with dedicated controls and populated with data.
 */
export default function App() {
  // -- state --

  // generic data-variable represents data fetched from the server
  // configured useFetch hook with a baseURL for future server requests
  const [data, fetchData] = useFetch(API_BASE_URL);

  const [filteredData, setFilteredData] = useState(null);

  // current path in the browser (e.g. "/contacts" )
  const { pathname } = useLocation();

  // -- effects --

  // after the inital render fetch data from the server
  useEffect(() => {
    fetchData(pathname);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // -- render

  return (
    <>
      <TableControls
        data={data}
        fetchData={fetchData}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <Table data={filteredData ?? data} />
    </>
  );
}
