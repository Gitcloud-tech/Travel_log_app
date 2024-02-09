import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<div className='logo-box'>
					<Link to="/" >
						<img src="Images/TheSafarLogo.png" className="logo" alt="SAFAR" />
					</Link>
				</div>
				<div className='navlinks1'>
					<ul className='d-flex'>
						<Link to="/" className="btn btn-primary">HOME</Link>
						<Link to="/allPosts" className="btn btn-primary">AllPosts</Link>
						<Link to='/allusers' className='btn btn-primary'>AllUsers</Link>
						<Link to="/myblogs" className="btn btn-primary">MyBlogs</Link>
						<Link to="/login" className="btn btn-outline-light">LOGIN</Link>
						<Link to="/signup" className="btn btn-warning">SIGNUP</Link>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;