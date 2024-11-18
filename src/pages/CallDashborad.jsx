import React from "react";
import Table from "../components/Table";

const CallDashboard = () => {

    const tableHeaders = [
        { label: 'Date', key: 'Date' },
        { label: 'Sales Team', key: 'SalesTeam' },
        { label: 'Call Details', key: 'CallDetails' }
    ];

    const tableData = [
        {
            id: 1,
            Date: '16/11/24',
            StartTime: '5:30 PM',
            EndTime: '6:00 PM',
            SalesTeam: 'Louis Vuitton',
            CallDetails: '+919446963527',
            ContactNumber: '+919876543210',
        },
        {
            id: 2,
            Date: '16/11/24',
            StartTime: '5:30 PM',
            EndTime: '6:00 PM',
            SalesTeam: 'Louis Vuitton',
            CallDetails: '+919446963527',
            ContactNumber: '+919876543210',
        },
        {
            id: 3,
            Date: '16/11/24',
            StartTime: '5:30 PM',
            EndTime: '6:00 PM',
            SalesTeam: 'Louis Vuitton',
            CallDetails: '+919446963527',
            ContactNumber: '+919876543210',
        },
        {
            id: 4,
            Date: '16/11/24',
            StartTime: '5:30 PM',
            EndTime: '6:00 PM',
            SalesTeam: 'Louis Vuitton',
            CallDetails: '+919446963527',
            ContactNumber: '+919876543210',
        },
        {
            id: 5,
            Date: '16/11/24',
            StartTime: '5:30 PM',
            EndTime: '6:00 PM',
            SalesTeam: 'Louis Vuitton',
            CallDetails: '+919446963527',
            ContactNumber: '+919876543210',
        },
        {
            id: 6,
            Date: '16/11/24',
            StartTime: '5:30 PM',
            EndTime: '6:00 PM',
            SalesTeam: 'Louis Vuitton',
            CallDetails: '+919446963527',
            ContactNumber: '+919876543210',
        },
        {
            id: 7,
            Date: '16/11/24',
            StartTime: '5:30 PM',
            EndTime: '6:00 PM',
            SalesTeam: 'Louis Vuitton',
            CallDetails: '+919446963527',
            ContactNumber: '+919876543210',
        },
        {
            id: 8,
            Date: '16/11/24',
            StartTime: '5:30 PM',
            EndTime: '6:00 PM',
            SalesTeam: 'Louis Vuitton',
            CallDetails: '+919446963527',
            ContactNumber: '+919876543210',
        },
        {
            id: 9,
            Date: '16/11/24',
            StartTime: '5:30 PM',
            EndTime: '6:00 PM',
            SalesTeam: 'Louis Vuitton',
            CallDetails: '+919446963527',
            ContactNumber: '+919876543210',
        },
        {
            id: 10,
            Date: '16/11/24',
            StartTime: '5:30 PM',
            EndTime: '6:00 PM',
            SalesTeam: 'Louis Vuitton',
            CallDetails: '+919446963527',
            ContactNumber: '+919876543210',
        },
    ];
    

    return (
        <div className="p-6 max-h-screen overflow-y-auto bg-gray-100 rounded-xl ">
            <h1 className="text-2xl font-bold mb-4">Calls Dashboard</h1>
            <div className="w-full p-4 bg-white rounded-xl shadow-md">
                <div className="header w-full mb-4 flex bg-white ">
                    <select className="outline-none text-sm py-3 border w-32 border-t-0">
                        <option value="" className="capitalize">Select calls</option>
                        <option value="" className="capitalize">No Answer</option>
                        <option value="" className="capitalize">Prospecting call</option>
                        <option value="" className="capitalize">meeting set</option>
                        <option value="" className="capitalize">changed company</option>
                        <option value="" className="capitalize">call me later</option>
                        <option value="" className="capitalize">completed</option>
                        <option value="" className="capitalize">no answer</option>
                    </select>
                    <div className="flex items-center flex-col justify-center w-full border border-t-0">
                        <h4 className="capitalize  text-xs text-center font-semibold">total</h4>
                        <p className="text-xs">87,799</p>
                    </div>
                    <div className="flex items-center flex-col justify-center w-full border border-t-0">
                        <h4 className="capitalize  text-xs text-center font-semibold">active call</h4>
                        <p className="text-xs">24</p>
                    </div>
                    <div className="flex items-center flex-col justify-center w-full border border-t-0">
                        <h4 className="capitalize  text-xs text-center font-semibold">no answer</h4>
                        <p className="text-xs">19</p>
                    </div>
                    <div className="flex items-center flex-col justify-center w-full border border-t-0">
                        <h4 className="capitalize  text-xs text-center font-semibold">left voicemail</h4>
                        <p className="text-xs">8,799</p>
                    </div>
                    <div className="flex items-center flex-col justify-center w-full border border-t-0">
                        <h4 className="capitalize  text-xs text-center font-semibold">voicemail full</h4>
                        <p className="text-xs">9,799</p>
                    </div>
                    <div className="flex items-center flex-col justify-center w-full border border-t-0">
                        <h4 className="capitalize  text-xs text-center font-semibold">wrong number</h4>
                        <p className="text-xs">7,799</p>
                    </div>
                    <div className="flex items-center flex-col justify-center w-full border border-t-0">
                        <h4 className="capitalize  text-xs text-center font-semibold">busy tone</h4>
                        <p className="text-xs">8,799</p>
                    </div>
                    <div className="flex items-center flex-col justify-center w-full border border-t-0">
                        <h4 className="capitalize  text-xs text-center font-semibold">not interested</h4>
                        <p className="text-xs">8,799</p>
                    </div>
                    <div className="flex items-center flex-col justify-center w-full border border-t-0">
                        <h4 className="capitalize  text-xs text-center font-semibold">not now</h4>
                        <p className="text-xs">9,799</p>
                    </div>
                </div>
                <Table tableHeaders={tableHeaders} tableData={tableData} />
            </div>
        </div>
    );
};

export default CallDashboard;
