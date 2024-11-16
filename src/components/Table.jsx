import React from 'react';



// Sample data array to make the table dynamic


// Placeholder download function
const handleDownload = (id) => {
  alert(`Downloading file for ID: ${id}`);
};

const Table = ({tableHeaders,  tableData}) => {

  return (
    <table className='w-full border shadow'>
      <thead className='bg-blue-500/5'>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header.key} className='border-b px-2 py-3 font-medium text-sm'>
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.id}>
            {tableHeaders.map((header) => (
              <td key={header.key} className='border-b px-2 py-3 font-medium text-sm text-center'>
                {header.key === 'download' ? (
                  <button
                    onClick={() => handleDownload(row.id)}
                    className='px-3 py-[1px] border border-blue-800/50 hover:border-blue-800 bg-blue-800/5 hover:bg-blue-800/10 transition-all duration-300 text-blue-800/50 hover:text-blue-800'
                  >
                    Download
                  </button>
                ) : (
                  row[header.key] // For non-download columns, display the corresponding data
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
