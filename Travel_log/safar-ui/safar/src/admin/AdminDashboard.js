import React from "react";
import "./AdminDashboard.css";
import videoFile from './videos/vid1.mp4'; 

const AdminDashboard = () => {
  return (
    <div className="temp">
      <h1>Welcome Admin...</h1>
      <div>
      <video src={videoFile} className="mt-4" autoPlay loop muted playsInline />
      </div>
    </div>
  );
};

export default AdminDashboard;
