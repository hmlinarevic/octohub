/**
 * Render a table based on the given data array.

 * Generates a table with columns based on the keys of the first object.
 * If data is null or empty display "nothing to display" message. 
 *
 * @returns {JSX.Element} A table element populated with data, or a message if no data is provided.
 */
export default function Table({ data }) {
  if (!data || !data.length) return <h3>Nothing to display...</h3>;

  const columns = Object.keys(data[0]); // (e.g. 'name', 'email', ...)

  /*
    Create a table header with given column names. Each column name is displayed
    in uppercase with specific styling.
  */

  const createTableHeader = (columns) => (
    <thead className="bg-lightViolet bg-opacity-10 text-left">
      <tr className="border-b">
        {columns.map((col) => (
          <th key={col} className="p-2 text-xs font-normal tracking-wide">
            {col.toUpperCase()}
          </th>
        ))}
      </tr>
    </thead>
  );

  /*
    Create a table body with rows and cells based on provided data and columns.
    Each cell displays the value of data (object) corresponding to its column 
    (key).
  */

  const createTableBody = (data, columns) => (
    <tbody className="text-sm">
      {data.map((obj, rowIndex) => (
        <tr key={rowIndex} className="border-b">
          {columns.map((key, colIndex) => (
            <td key={`${rowIndex}-${colIndex}`} className="p-2">
              {obj[key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  // -- render --

  return (
    <>
      <div className="overflow-auto rounded border-neutral-300">
        <table className="w-full">
          {createTableHeader(columns)}
          {createTableBody(data, columns)}
        </table>
      </div>
    </>
  );
}
