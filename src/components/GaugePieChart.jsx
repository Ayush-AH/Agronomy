import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Text } from 'recharts';

const GaugeChart = () => {
  const completedPercentage = 72;

  const data = [
    { value: 7, color: '#22C55E' },
    { value: 6, color: '#FFBB28' },
    { value: 3, color: '#EF4444' },
    { value: 1, color: '#E0E0E0' },
  ];

  return (
    <div className="text-center relative">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>

          {/* Text to show the completed percentage */}
          <text
            x="50%"
            y="50%"
            dy={8}
            textAnchor="middle"
            className="text-2xl font-bold text-black"
          >
            {`${completedPercentage}%`}
          </text>
        </PieChart>
      </ResponsiveContainer>

      {/* Completed Text Below the Chart */}
      <div className="absolute left-[6%] top-[60%] transform -translate-y-1/2">
        <p className="text-gray-500 mt-12 text-xs">Completed</p>
        <div className="flex gap-10 text-center text-sm font-medium text-gray-700">
          <div>
            <p className="text-lg font-bold">10</p>
            <p className='text-xs anta-regular'>Total projects</p>
          </div>
          <div className="text-[#22C55E]">
            <p className="text-lg font-bold">7</p>
            <p className='text-xs anta-regular'>Completed</p>
          </div>
          <div className="text-[#FFBB28]">
            <p className="text-lg font-bold">6</p>
            <p className='anta-regular'>On Review</p>
          </div>
          <div className="text-[#EF4444]">
            <p className="text-lg font-bold">3</p>
            <p className="text-xs anta-regular">On Progress</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;
