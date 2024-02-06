import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Logs.css'

const Logs = () => {



	var name = ["AB", "CD","EF", "GH", "IJ", "KL", "MN", "OP", "QR"]
	const handleTimeLine = () => {
		const timelineItems = [];

		
		let year1 = 2020, year2 = 21;
		for (let i = 0; i < 10; i++) {
			const side = i % 2 === 0 ? "left" : "right"; // Set side dynamically
			timelineItems.push(
			  <div key={i} className={`content-container ${side}-container`}>
				<i className="fa-solid fa-gear"></i>
				<div className="text-box">
				  <img className="d-block w-100" src={`Images/${side === 'left' ? 'Antman' : 'Ironman'}.jpg`} alt={side} />
				  <h2>{`${name[i]}`}</h2>
				  <small>{`${year1++} - ${year2++}`}</small>
				  <p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, delectus.
					Labore aspernatur eaque quo nostrum aliquam. Unde debitis blanditiis ab.
				  </p>
				  <span className={`${side}-container-arrow`}></span>
				  <Link to="/triplog" className="btn btn-primary">View more</Link>
				</div>
			  </div>
			);
		  }
		

		return timelineItems;
	};





	return (
		<>
			<div className="timeline">

				{handleTimeLine()}
				
				<i className="fa-solid fa-caret-down text-light"></i>
			</div>

		</>
	)
}

export default Logs;


