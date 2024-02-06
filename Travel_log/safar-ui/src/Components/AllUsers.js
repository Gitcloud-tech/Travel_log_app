import React from 'react'
import { Link } from 'react-router-dom'

const AllUsers = () => {
	return (
		<>
			<div className='d-flex'>
				{/* <aside className='sidebar'>
                    <Sidebar />
                </aside> */}

				<main className="container">
					<div className="container mt-4 d-flex">
						<div className="card" style={{ width: "18rem" }}>
							<img className="card-img-top" src="Images/Antman.jpg" alt="Card image cap" />
							<div className="card-body">

								<h5 className="card-title">Antman</h5>
								<p className="card-text">
									<ul>
										<li>Lonavla</li>
										<li>Mahabaleshwar</li>
										<li>Konkan</li>
									</ul>
								</p>
								<Link to="/viewblogs" className="btn btn-primary">View Blogs</Link>
							</div>
						</div>
						<div className="card" style={{ width: "18rem" }}>
							<img className="card-img-top" src="Images/Antman.jpg" alt="Card image cap" />
							<div className="card-body">

								<h5 className="card-title">Ironman</h5>
								<p className="card-text">
									<ul>
										<li>Tahiti</li>
										<li>Bali</li>
										<li>Maldives</li>
									</ul>
								</p>
								<Link to="/viewblogs" className="btn btn-primary">View Blogs</Link>
							</div>
						</div>
						<div className="card" style={{ width: "18rem" }}>
							<img className="card-img-top" src="Images/Antman.jpg" alt="Card image cap" />
							<div className="card-body">

								<h5 className="card-title">Superman</h5>
								<p className="card-text">
									<ul>
										<li>Kashmir</li>
										<li>Gujarat</li>
										<li>Kannyakumari</li>
									</ul>
								</p>
								<Link to="/viewblogs" className="btn btn-primary">View Blogs</Link>
							</div>
						</div>
						<div className="card" style={{ width: "18rem" }}>
							<img className="card-img-top" src="Images/Antman.jpg" alt="Card image cap" />
							<div className="card-body">

								<h5 className="card-title">Spiderman</h5>
								<p className="card-text">
									<ul>
										<li>Leh</li>
										<li>Ladakh</li>
										<li>Kashmir</li>
									</ul>
								</p>
								<Link to="/viewblogs" className="btn btn-primary">View Blogs</Link>
							</div>
						</div>

					</div>
					<Link to="/addAtale" className="btn btn-success mt-5">Add A Tale</Link> <br></br>
					<Link to="/shareJourney" className="btn btn-success mt-5">Share my Journey</Link>
				</main>
			</div>
		</>

	)
}

export default AllUsers