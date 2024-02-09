import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../Styles/MyBlogs.css';
import axios from 'axios';

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]); 

  useEffect(() => {
    getUserBlogs();

  }, []);

  const getUserBlogs = async () => {
    const result = await axios.get("http://localhost:8080/blogs/getBlogs"); 
    setBlogs(result.data);
  }

  return (
    <main className="container container-fluid">
      {blogs.map((blog, index) => (
      <div key={index} className="blog d-flex flex-column flex-md-row">
        <section className="place-image">
          <img src="Images/Ironman.jpg" className="img-fluid" alt="" />
        </section>
        <section className="details-part flex-grow-1 p-3">
          <div className="main-parent mt-2">
            <div className="main-box1">
              <h3>{blog.title}</h3>
            </div>
            <div className="main-box2">
              <label>Start date: </label> <span>{blog.startDate}</span>
            </div>
            <div className="main-box3">
              <label>End date: </label> <span>{blog.endDate}</span>
            </div>
            <div className="main-box4">
              <label>Members: </label> <span>{blog.members}</span>
            </div>
            <div className="main-box5">
              <label>Total cost: </label> <span>{blog.totalCost}</span>
            </div>
            <div className="main-box6">
              <label>Transportation: </label> <span>{blog.transportationMode}</span>
            </div>
          </div>

          <div className="d-flex justify-content-between mt-3">
            <Link className="btn btn-primary" to="/logs">
              View
            </Link>
            <Link to="/createLogs" className="btn btn-success">
              Create Logs
            </Link>
          </div>
        </section>
      </div>
      ))}
      <Link className="btn btn-success mt-4" to="/addblog">
        Add a Blog
      </Link>
    </main>
  );
};

export default MyBlogs;
