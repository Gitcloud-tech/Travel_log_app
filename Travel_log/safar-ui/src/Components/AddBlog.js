import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/AddBlog.css';

const AddBlog = () => {
	const [blog, setBlog] = useState({
		title: '',
		startDate: '',
		endDate: '',
		membersNum: '',
		cost: '',
		transport: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setBlog((prevBlog) => ({ ...prevBlog, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// Send data to the backend using axios.post
			const result = await axios.post('http://localhost:8080/blogs/addBlog', blog);
			console.log('Blog added successfully:', result.data);

			// Clear the form after successful submission if needed
			setBlog({
				title: '',
				startDate: '',
				endDate: '',
				members: '',
				totalCost: '',
				transportationMode: '',
			});
			alert("Blog added successfully");
		} catch (error) {
			console.error('Error adding blog:', error.message);
		}
		
	};

	return (
		<>
			<div className="container" >
				<form onSubmit={handleSubmit} method="post">
					<div className="main-parent mt-2">
						<div className="main-box1">
							<label>Title: <input type="text" name="title" value={blog.title} onChange={handleChange} /></label>
						</div>
						<div className="main-box2">
							<label>Start date: <input type="date" name="startDate" value={blog.startDate} onChange={handleChange} /></label>
						</div>
						<div className="main-box3">
							<label>End date: <input type="date" name="endDate" value={blog.endDate} onChange={handleChange} /></label>
						</div>
						<div className="main-box4">
							<label>Members: <input type="number" min="1" name="members" value={blog.members} onChange={handleChange} /></label>
						</div>
						<div className="main-box5">
							<label>Total cost: <input type="number" min="0" name="totalCost" value={blog.totalCost} onChange={handleChange} /></label>
						</div>
						<div className="main-box6">
							<select className="form-select" aria-label="Default select example" name="transportationMode" value={blog.transportationMode} onChange={handleChange}>
								<option selected>Transportation</option>
								<option value="1">By Road</option>
								<option value="2">By Railway</option>
								<option value="3">By Air</option>
							</select>
						</div>
					</div>
					<button className="btn btn-success mt-5" type="submit">SUBMIT</button>
				</form>
			</div>
		</>
	);
};

export default AddBlog;
