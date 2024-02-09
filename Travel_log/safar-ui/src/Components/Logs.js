import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Logs.css'
import axios from 'axios'

const Logs = () => {
	const [logs, setLogs] = useState([]); 

  useEffect(() => {
    getUserLogs();

  }, []);

  const getUserLogs = async () => {
    const result = await axios.get("http://localhost:8080/blogs/getLogs"); 
    setLogs(result.data);
  }

  const handleTimeLine = () => {
	return logs.map((log, index) => {
	  const side = index % 2 === 0 ? "left" : "right"; // Set side dynamically
	  const { placeName, startTime, exitTime, description } = log; // Adjust these based on your log data structure
	  return (
		<div key={index} className={`content-container ${side}-container`}>
		  <i className="fa-solid fa-gear"></i>
		  <div className="text-box">
			<img className="d-block w-100" src={`Images/${side === 'left' ? 'Antman' : 'Ironman'}.jpg`} alt={side} />
			<h2>{log.placeName}</h2>
			<small>{log.startTime} - {log.exitTime}</small>
			<p>{log.description}</p>
			<span className={`${side}-container-arrow`}></span>
			<Link to="/triplog" className="btn btn-primary">View more</Link>
		  </div>
		</div>
	  );
	});
  };




	// var name = ["AB", "CD","EF", "GH", "IJ", "KL", "MN", "OP", "QR"]
	// const handleTimeLine = () => {
	// 	const timelineItems = [];

	// 	i want to map the data i will get from getUserLogs() in the timeline cards 
	// 	so remove the unnecessary for loop and take alternative cards as they are  and map the data accordingly with title and start dat and description 

		
	// 	let year1 = 2020, year2 = 21;
	// 	for (let i = 0; i < 10; i++) {
	// 		const side = i % 2 === 0 ? "left" : "right"; 
	// 		timelineItems.push(
	// 		  <div key={i} className={`content-container ${side}-container`}>
	// 			<i className="fa-solid fa-gear"></i>
	// 			<div className="text-box">
	// 			  <img className="d-block w-100" src={`Images/${side === 'left' ? 'Antman' : 'Ironman'}.jpg`} alt={side} />
	// 			  <h2>{`${name[i]}`}</h2>
	// 			  <small>{`${year1++} - ${year2++}`}</small>
	// 			  <p>
	// 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, delectus.
	// 				Labore aspernatur eaque quo nostrum aliquam. Unde debitis blanditiis ab.
	// 			  </p>
	// 			  <span className={`${side}-container-arrow`}></span>
	// 			  <Link to="/triplog" className="btn btn-primary">View more</Link>
	// 			</div>
	// 		  </div>
	// 		);
	// 	  }
		

	// 	return timelineItems;
	// };

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


