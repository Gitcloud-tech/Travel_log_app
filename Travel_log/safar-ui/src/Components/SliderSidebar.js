import React from 'react'
import '../Styles/SliderSidebar.css'

const SliderSidebar = () => {
	return (
		<>
			<input type="checkbox" id="check" />
			<label htmlFor="check">
				<i className="fas fa-navicon" id="btn"></i>
				<i className="fas fa-navicon" id="cancel"></i>
			</label>
			<div className="sidebar">
				<header>Portfolio</header>
				<ul>
					<li><a href="index.html">H o m e</a></li>
					<li><a href="academic.html">A c a d e m i c</a></li>
					<li><a href="contact.html">C o n t a c t</a></li>
					<li><a href="about.html">A b o u t</a></li>
					<li><a href="index2.html">A I PF</a></li>
				</ul>
			</div>
		</>
	)
}

export default SliderSidebar