import React, { useState } from 'react';
import { RiPlayMiniFill } from "react-icons/ri";
import AudioPlayer from './AudioPlayer';

// Placeholder download function
const handleDownload = (id) => {
  alert(`Downloading file for ID: ${id}`);
};

const Table = ({ tableHeaders, tableData }) => {

  const [isAudio, setIsAudio] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const handleAudioClick = () => {
    setIsAudio(!isAudio);
    setAudioPlaying(true);
  };

  const handleCloseAudio = () => {
    setIsAudio(false);
    setAudioPlaying(false);
  };

  return (
    <div className='w-full relative h-fit'>
      <table className='w-full border shadow'>
        <thead className='bg-blue-500/5'>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header.key} className={`border-b px-2 py-3 text-sm text-left font-semibold`}>
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
                        <button
                          onClick={handleAudioClick}
                          className="flex items-center gap-2 border border-gray-300 bg-white px-3 py-1 hover:shadow-md transition-all duration-200 ease-in-out hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none"
                        >
                          <p className="font-medium text-gray-700">Listen Call</p>
                          <RiPlayMiniFill className="rotate-90 text-sm text-blue-600" />
                        </button>
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
                    row[header.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isAudio && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <AudioPlayer isPlaying={audioPlaying} closeAudio={handleCloseAudio} />
        </div>
      )}
    </div>
  );
};

export default Table;
