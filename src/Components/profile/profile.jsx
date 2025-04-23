import React from "react";

const Profile = () => {
    return (
      <div className="bg-white shadow rounded p-6">
        <h2 className="text-xl font-bold mb-4">Suresh Penkey</h2>
        <p className="text-gray-600">Location: Hyderabad</p>
        <div className="mt-4">
          <label className="text-gray-800 font-semibold">Job Search Status:</label>
          <select className="mt-2 block border rounded p-2">
            <option>Ready to interview</option>
            <option>Open to offers</option>
            <option>Not looking</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default Profile;
  