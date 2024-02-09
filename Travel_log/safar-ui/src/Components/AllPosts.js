import React, { useEffect, useState } from 'react'
import '../Styles/AllPosts.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AllPosts = () => {
  const [blogs, setBlogs] = useState([]); 

  useEffect(() => {
    getUserBlogs();

  }, []);

  const getUserBlogs = async () => {
    const result = await axios.get("http://localhost:8080/blogs/getBlogs"); 
    setBlogs(result.data);
  }

  return (
    <>
      <div className="container">
        {blogs.map((blog, index) => (
          <div key={index} className="card" style={{ width: "18rem", marginBottom: "10px" }}>
            <div className="card-body">
              <p className="card-text">
                <p>Place Name: {blog.title}</p>
                <p>Start Date: {blog.startDate}</p>
                <p>End Date: {blog.endDate}</p>
                <p>Members: {blog.members}</p>
                <p>Total Cost: {blog.totalCost}</p>
                <p>Transportation Mode: {blog.transportationMode}</p>
                {/* Add more fields as needed  and try to add username at bottom right to show whose Blog is this*/}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllPosts;
