import React, { useEffect, useState } from 'react'
import '../Styles/Feed.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Feed = () => {
  const [users, setUsers] = useState([]); // Updated variable name
  const [blogs, setBlogs] = useState([]); // Updated variable name

  useEffect(() => {
    getUsers();
    
  }, []);

  const getUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  }

  const getUserBlogs = async () => {
    const result = await axios.get("http://localhost:8080/blogs/getBlogs"); // Updated endpoint
    setBlogs(result.data);
  }

  return (
    <>
      <div className="container">
        {users.map((user, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img className="card-img-top" src="Images/Antman.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{index + 1} {user.username}</h5>
              <p className="card-text">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.description}</p>
              </p>
              <Link to="/viewblogs" className="btn btn-primary">View Blogs</Link>
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-warning" onClick={getUserBlogs}>View Blogs</button>

	  <div className="container">
        {blogs.map((blog, index) => (
          <div key={index} className="card" style={{ width: "18rem", marginBottom: "10px" }}>
            <div className="card-body">
              <h5 className="card-title">{index + 1}</h5>
              <p className="card-text">
                <p>Place Name: {blog.placeName}</p>
                <p>Start Date: {blog.startDate}</p>
                <p>End Date: {blog.endDate}</p>
                <p>Members: {blog.members}</p>
                <p>Total Cost: {blog.totalCost}</p>
                <p>Transportation Mode: {blog.transportationMode}</p>
                {/* Add more fields as needed */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Feed;
