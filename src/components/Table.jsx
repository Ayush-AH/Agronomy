import React from 'react';



// Sample data array to make the table dynamic


// Placeholder download function
const handleDownload = (id) => {
  alert(`Downloading file for ID: ${id}`);
};

const Table = ({ tableHeaders, tableData }) => {

  return (
    <table className='w-full border shadow'>
      <thead className='bg-blue-500/5'>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header.key} className={`border-b px-2 py-3 font-medium text-sm text-left font-semibold`}>
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.id}>
            {tableHeaders.map((header) => (
              <td key={header.key} className='border-b px-2 py-3 font-medium text-sm text-left'>
                {header.key === 'download' ? (
                  <button
                    onClick={() => handleDownload(row.id)}
                    className='px-3 py-[1px] border border-blue-800/50 hover:border-blue-800 bg-blue-800/5 hover:bg-blue-800/10 transition-all duration-300 text-blue-800/50 hover:text-blue-800'
                  >
                    Download
                  </button>
                ) : header.key === 'CallDetails' ? (
                  <div className='flex items-center justify-between'>
                    <div className='flex  items-center gap-6'>
                      <div
                        className='px-4 py-[4px] w-fit text-white bg-[#02C797] rounded-md font-regular text-xs'
                      >
                        Active Call
                      </div>
                      <div
                        className='px-4 py-[4px] w-fit text-black bg-zinc-300 rounded-md font-regular text-xs'
                      >
                        Active Call
                      </div>
                      <h2 className='text-xs'>(02:54)</h2>
                    </div>
                    <div className='flex items-center gap-6'>
                      <select className='border px-2 py-[4px]'>
                        <option value="">Listen Call</option>
                      </select>
                      <h2 className='text-xs'>Dec 18</h2>
                      <span className='flex items-center justify-center w-6 h-6 rounded-full bg-zinc-200 text-[10px]'>EE</span>
                    </div>
                  </div>

                ) : header.key === 'Date' ? (
                  <div className='flex items-center gap-2'>
                    <input type="checkbox" name="" id="" />
                    <div className='flex flex-col gap-1'>
                      <h4 className='text-xs text-[#2296EC] font-semibold'>{row.Date}</h4>
                      <h6 className='text-xs'><span>{row.StartTime}</span> - <span>{row.EndTime}</span></h6>
                    </div>
                  </div>
                ) : header.key === 'owner' ? (
                  <div className='flex items-center gap-2'>
                    <input type="checkbox" name="" id="" />
                    <div className='flex flex-col gap-1'>
                      <h6 className='font-semibold text-xs'>{row.owner}</h6>
                    </div>
                  </div>
                ) : header.key === 'SalesTeam' ? (
                  <div className='flex flex-col gap-1'>
                    <h4 className='text-xs text-[#2296EC] font-semibold'>{row.SalesTeam}</h4>
                    <h6 className='text-xs'>{row.ContactNumber}</h6>
                  </div>
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
