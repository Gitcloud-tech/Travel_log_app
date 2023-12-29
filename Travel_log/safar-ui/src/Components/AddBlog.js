import React from 'react'
import '../Styles/AddBlog.css'

const AddBlog = () => {
	return (
		<>
			<div className="container border main-form-box">
				<form action="">

				<div className="main-parent mt-4">
					<div className="main-box1">
						<label>Title: <input type="text" /></label>
					</div> {/* title / city / Country */}
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
						<select class="form-select" aria-label="Default select example">
							<option selected>Transportation</option>
							<option value="1">By Road</option>
							<option value="2">By Railway</option>
							<option value="3">By Air</option>
						</select>
					<hr />
					</div>
					<div className="main-box7">

					<div className="log-parent">
						<div className="div1">
							<label>Place Name: <input type="text" palceholder="Enter place name"/></label>
							 </div>
						<div className="div2">
							<label>Start time: <input type="datetime-local" /></label>
							 </div>
						<div className="div3">
							<label>Exit time: <input type="datetime-local" /></label>
						</div>
						<div className="div4">
							<label>Images: <input type="file" /></label>
						</div>
						<div className="div5">
							<label>Description:<br></br> 
								<textarea  id="" cols="60" rows="5"></textarea>
							</label>
							 </div>
						<div className="div6"> 
							<label>Pass required:&nbsp;
								<input type="checkbox" id="check"/> &nbsp;
								<input type="text" placeholder="Enter amount of pass" className="passMoney"/>
							</label>
						</div>
						<div className="div7"> 
							<label>Location:
								<input type="text" placeholder="location link/ co-ordinate"/>
							</label>
						</div>
						<div className="div8 d-flex">
							<button className="btn btn-primary">Add Label</button>
							<button className="btn btn-outline-primary">Add Input Box</button>
							 </div>
						<div className="div9">
							<button className="btn btn-success">Add New Log</button>
							 </div>
					</div>








					</div>  {/* main box 7 ends */}
				</div>

				<button className="btn btn-success mt-5" type="submit">SUBMIT</button>
			</form>
			</div>



		</>
	)
}

export default AddBlog