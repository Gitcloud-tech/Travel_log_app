import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const AllUsers = () => {
	const [users, setUsers] = useState([]); 
	
	useEffect(() => {
		getUsers();

	}, []);

	const getUsers = async () => {
		const result = await axios.get("http://localhost:8080/users");
		setUsers(result.data);
	}

	return (
		<>
			<div className="container">
				{users.map((user, index) => (
					<div className="card" style={{ width: "18rem" }} key={index}>
						<img className="card-img-top" src="Images/Antman.jpg" alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">{user.username}
								<span>
									{/* if youtube and instagram field is not null then show social media icons  */}
									<a href={user.socialYoutube} target='_blank'><i class="fa-brands fa-youtube" style={{ color: "#e30202" }}></i></a>
									<a href={user.socialInsta} target='_blank'><i class="fa-brands fa-instagram" style={{ color: "#f05cd5" }}></i></a>
									<a href={user.email} target='_blank'><i class="fa-solid fa-envelope" style={{ color: "#ffadad" }}></i></a>
								</span>
							</h5>
							<p>{user.fullName}</p>
							<div className="foot">
								<Link to="/myblogs" className="btn btn-primary">View Blogs</Link>
								<a href="#"><i class="fa-solid fa-user" style={{ color: "#474F7A" }}></i></a>
							</div>

						</div>
					</div>
				))}
			</div>


			
			
		</>

	)
}

export default AllUsers