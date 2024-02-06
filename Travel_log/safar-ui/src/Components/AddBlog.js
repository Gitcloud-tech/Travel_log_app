import React, {useState, useRef} from 'react'
import '../Styles/AddBlog.css'
import axios from 'axios'


const AddBlog = () => {

	const handleBlog = () => {

		axios.post("http://localhost:8080/blogs/addBlog");
	}
	


	return (
		<>
			<div className="container border main-form-box">
				<form onSubmit={handleBlog} method="post">

					<div className="main-parent mt-4">
						<div className="main-box1">
							<label>Title: <input type="text" /></label>    {/* title / city / Country */}
						</div>
						<div className="main-box2">
							<label>Start date: <input type="date" /></label>

						</div>
						<div className="main-box3">
							<label>End date: <input type="date" /></label>

						</div>
						<div className="main-box4">
							<label>Members: <input type="number" min="1" /></label>

						</div>
						<div className="main-box5">
							<label>Total cost: <input type="number" min="0" /></label>

						</div>
						<div className="main-box6">
							<select className="form-select" aria-label="Default select example">
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
	)
}

export default AddBlog