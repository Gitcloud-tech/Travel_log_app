import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Styles/MyBlogs.css';
import axios from 'axios';
import { getUserId } from '../utils/TokenUtil';

// import Logs from './Logs.jsx'

const MyBlogs = () => {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    const bloggerId = getUserId();
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASEPATH}/blog/get-my-blogs/${bloggerId}`);
        if (response.status === 200) {
          const blogsWithBloggerId = response.data.map(blog => ({ ...blog, bloggerId }));
          setBlogs(blogsWithBloggerId);
        } else {
          console.error('Failed to fetch blogs:', response.statusMessage);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);


  const handleUpdate = async (blogId) => {
    console.log(blogId);
    navigate(`/update-blog/${blogId}`);
  };

  const handleDelete = async (blogId) => {
    console.log(blogId);   
    axios.delete(`${process.env.REACT_APP_BASEPATH}/blog/delete/${blogId}`)

    navigate(`/my-blogs`);
  };

//   const handleDelete = async (blogId) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this blog?");

//     if (confirmDelete) {
//         console.log(blogId);
//         try {
//             await axios.delete(`${process.env.REACT_APP_BASEPATH}/blog/delete/${blogId}`);
//             console.log("Blog deleted successfully");
//             window.location.reload();
//         } catch (error) {
//             console.error('Failed to delete blog:', error);
//             alert("Unable to delete the blog, try reloading !!!")
//         }
//     }
// };



  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container className="mt-5 my-blogs-container">
        <h1 className="mb-4 head text-center">My Journey Tales</h1>

        {blogs.length === 0 ? (
          <p className="text-center">No blogs available.</p>
        ) : (
          <>
            {blogs.map((blog, index) => (
              <Card key={blog.id} className='mb-2 blog-container'>
                <Card.Body className="blog-container">
                  <div className="blog-image-container">
                    <img
                      className="blog-image"
                      src={`Images/${blog.photoUrl}`}
                      alt={`Blog ${blog.id}`}
                      onContextMenu={handleContextMenu}
                    />

                  </div>
                  <div className="blog-info text-box">
                    <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
                      <span >{blog.title}</span>
                      
                    </p>
                    <p>
                      <b>Start date:</b> {blog.startDate} &nbsp;
                      <b>End date:</b> {blog.endDate}
                    </p>
                    <p>
                      <b>Members:</b> {blog.members} &nbsp;
                      <b>Total cost:</b> {blog.totalCost}
                    </p>
                    <p>
                      <b>Transportation:</b> {blog.transportationMode}
                    </p>
                    <p className="description border" >

                      {blog.blogDescription}
                    </p>
                    

                    <span className="crud-buttons">
                      {console.log("BlogggerID =====>>>", blog.bloggerId)}
                      <Button onClick={() => navigate('/my-logs', { state: { blogId: blog.id, bloggerId: blog.bloggerId } })}>View</Button>
                      <Button onClick={() => navigate('/create-logs', { state: { blogId: blog.id } })}>Create Logs</Button>
                      <Button onClick={() => handleUpdate(blog.id)}>Update</Button>
                      <Button onClick={() => handleDelete(blog.id)}>Delete</Button>
                    </span>
                  </div>
                </Card.Body>
              </Card>
            ))}

          </>
        )}
        <div className="d-flex">
          <Button onClick={() => navigate('/add-blog')}>Add New Blog</Button>
        </div>
      </Container>

    </>
  );
};

export default MyBlogs;



