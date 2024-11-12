import React from 'react'
import { Link } from 'react-router-dom';

const TableColumn = (idx, heading, list, bgColor = "bg-yellow-500", wt, py, px, ht) => {
  return (
    <div className={`w-44 ${idx} h-full rounded ${bgColor} shadow-md text-center overflow-y-auto p-2`}>
      <h2 className="text-xl font-semibold mb-2">{heading}</h2>
      <hr className="border-t border-gray-500 mb-2" />
      <div className="overflow-y-auto flex justify-center flex-col custom-scrollbar max-h-[30vh] space-y-1">
        {list.map((item, index) => (
          heading === 'ACTION' ? (
            <Link key={index} to={`/order-board/order/${index}`} className="text-sm text-blue-500 hover:underline ">
              {item}
            </Link>
          ) : (
            <p key={index} className="text-sm">{item}</p>
          )
        ))}
      </div>
    </div>
  );
}

export default TableColumn