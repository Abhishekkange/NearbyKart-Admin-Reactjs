import React from "react";

const Dashboard = () => {
    return <div>
        <div className="p-5 rounded-sm">
            <div className="p-3 text-4xl">
                Add Product Name
            </div>
            <div className="p-3 max-w-3xl">
                <input type="text" className="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-white focus:border-black block w-full p-2.5 " placeholder="Product Name" required />
            </div>
            <div className="p-3">
                <div className="border-black border-2 max-w-3xl rounded-md">
                    <div className="text-xl p-2 border-b-black border-2">
                        Product Data
                    </div>
                    <div className="p-2">
                        General<br />
                        Inventory<br />
                        Attributes
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Dashboard;