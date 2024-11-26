import React, { useState } from "react";
import Table from "../components/Table";
import { Link } from "react-router-dom";

const AllLead = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const tableHeaders = [
    { label: 'Owner', key: 'owner' },
    { label: 'Pipeline Stage', key: 'pipelineStage' },
    { label: 'Phone Number', key: 'phoneNumber' },
    { label: 'State', key: 'state' },
    { label: 'Call Purpose', key: 'callPurpose' },
    { label: 'Unique Id', key: 'uniqueId' }
  ];

  const tableData = [
    {
      id: 1,
      owner: 'Krishi Seva Kendra Webs',
      pipelineStage: 'Open Lead (Containing 1)',
      phoneNumber: '+919446963527',
      state: 'Bihar',
      callPurpose: 'Requirement',
      uniqueId : "2234567"
    },
    {
      id: 2,
      owner: 'Agritech Solutions',
      pipelineStage: 'Closed Lead',
      phoneNumber: '+919876543210',
      state: 'Uttar Pradesh',
      callPurpose: 'Follow Up',
      uniqueId : "2234564"
    },
    {
      id: 3,
      owner: 'AgriTech Global',
      pipelineStage: 'Lead in Progress',
      phoneNumber: '+919977653210',
      state: 'Maharashtra',
      callPurpose: 'Initial Contact',
      uniqueId : "2234563"
    },
    {
      id: 4,
      owner: 'Digital Agri Solutions',
      pipelineStage: 'Open Lead',
      phoneNumber: '+919987654321',
      state: 'Rajasthan',
      callPurpose: 'Lead Qualification',
      uniqueId : "2234562"
    },
    {
      id: 5,
      owner: 'Farmers Connect',
      pipelineStage: 'Follow Up',
      phoneNumber: '+919965432187',
      state: 'Delhi',
      callPurpose: 'Lead Nurturing',
      uniqueId : "2234561"
    },
    {
      id: 6,
      owner: 'AgroGenics',
      pipelineStage: 'Closed Lead',
      phoneNumber: '+919932165478',
      state: 'Tamil Nadu',
      callPurpose: 'Deal Closure',
      uniqueId : "2234568"
    },
    {
      id: 7,
      owner: 'TechSphere',
      pipelineStage: 'Negotiation',
      phoneNumber: '+919876543210',
      state: 'Maharashtra',
      callPurpose: 'Pricing Discussion',
      uniqueId: "2234569"
    },
    {
      id: 8,
      owner: 'GreenTech Solutions',
      pipelineStage: 'Lead Qualification',
      phoneNumber: '+918765432109',
      state: 'Kerala',
      callPurpose: 'Initial Consultation',
      uniqueId: "2234570"
    },
    {
      id: 9,
      owner: 'BioPharma Inc.',
      pipelineStage: 'Proposal Sent',
      phoneNumber: '+919988776655',
      state: 'Gujarat',
      callPurpose: 'Follow-up on Proposal',
      uniqueId: "2234571"
    },
    {
      id: 10,
      owner: 'SmartComm Technologies',
      pipelineStage: 'Contract Review',
      phoneNumber: '+919832176543',
      state: 'Andhra Pradesh',
      callPurpose: 'Contract Finalization',
      uniqueId: "2234572"
    },
    {
      id: 11,
      owner: 'FutureEnergy',
      pipelineStage: 'Closed Won',
      phoneNumber: '+917862435123',
      state: 'Uttar Pradesh',
      callPurpose: 'Onboarding Call',
      uniqueId: "2234573"
    },
    {
      id: 12,
      owner: 'NextGen Innovations',
      pipelineStage: 'Qualification',
      phoneNumber: '+919754621789',
      state: 'Karnataka',
      callPurpose: 'Product Demo',
      uniqueId: "2234574"
    },
    {
      id: 13,
      owner: 'SolarFlex',
      pipelineStage: 'Initial Contact',
      phoneNumber: '+918979601234',
      state: 'Rajasthan',
      callPurpose: 'Lead Introduction',
      uniqueId: "2234575"
    },
    {
      id: 14,
      owner: 'UrbanTech Solutions',
      pipelineStage: 'Proposal Sent',
      phoneNumber: '+917290540879',
      state: 'Delhi',
      callPurpose: 'Proposal Discussion',
      uniqueId: "2234576"
    },
    {
      id: 15,
      owner: 'EcoMaterials Co.',
      pipelineStage: 'Closed Lost',
      phoneNumber: '+919301286547',
      state: 'Bihar',
      callPurpose: 'Re-engagement Call',
      uniqueId: "2234577"
    }
    
  ];
  


  return (
    <div className="p-4 space-y-4 bg-white rounded-xl max-h-screen overflow-y-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Leads</h1>
        <div className="flex gap-2">
          {/* Owner Dropdown */}
          <div className="relative">
            <button className="border px-4 py-2 rounded-md">
              Owner
            </button>
          </div>

          {/* State Dropdown */}
          <div className="relative">
            <button className="border px-4 py-2 rounded-md">
              State
            </button>
          </div>

          {/* Edit Button */}
          <button className="border px-4 py-2 rounded-md">Edit</button>

          {/* Action Button */}
          <Link to="/all-lead-assigned" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Action
          </Link>
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <div className="relative flex-1">
          <input
            type="search"
            placeholder="Search by ID"
            className="border px-4 py-2 pl-8 rounded-md w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="absolute left-2 top-2.5 text-gray-500">🔍</span>
        </div>
        <button className="border px-4 py-2 rounded-md">Import</button>
      </div>

      <Table tableHeaders={tableHeaders} tableData={tableData}/>
    </div>
  );
};

export default AllLead;
