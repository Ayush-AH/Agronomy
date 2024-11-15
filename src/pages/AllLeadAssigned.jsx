import React from "react";
import { useState } from 'react';

const AllLeadAssigned = () => {
  const [owner, setOwner] = useState("");
  const [team, setTeam] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");

  const leads = [
    {
      title: "Krishi Sewa Kendra Webs",
      type: "Open Leads",
      location: "Bihar",
      phone: "Phone Number*",
      requirements: "Requirements",
      id: "224818892",
    },
    {
      title: "Krishi Sewa Kendra Webs",
      type: "Open Leads",
      location: "Bihar",
      phone: "Phone Number*",
      requirements: "Requirements",
      id: "224818892",
    },
  ];

  return (
    <div className="p-6 max-w-full min-h-full mx-auto bg-gray-100 rounded-xl ">
      <h1 className="text-2xl font-bold mb-4">Leads Assigned</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {leads.map((lead, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg">
            <div className="p-4">
              <h2 className="font-bold mb-2">1. {lead.title}</h2>
              <p className="text-sm text-gray-600">{lead.type}</p>
              <div className="flex justify-between mt-2">
                <span>{lead.location}</span>
                <span>{lead.phone}</span>
              </div>
              <p className="mt-2">{lead.requirements}</p>
              <p className="mt-2 text-sm text-gray-600">ID - {lead.id}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Assigned</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="owner"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Owner:
            </label>
            <select
              id="owner"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Owner</option>
              <option value="owner1">Owner 1</option>
              <option value="owner2">Owner 2</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="team"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Team:
            </label>
            <select
              id="team"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Team</option>
              <option value="team1">Team 1</option>
              <option value="team2">Team 2</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Deadline:
            </label>
            <input
              type="date"
              id="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Task Priority:
            </label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-100">
            Cancel
          </button>
          <button className="px-4 py-2 border border-blue-500 rounded-md text-sm text-white bg-blue-500 hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllLeadAssigned;
