import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
const Navbar = ()=> {
    return(
    <>
        <nav className="navbar">
        <div className='col-1'>
					<Link to="/" >
						<img src="Images/TheSafarLogo.png" className="logo" alt="SAFAR" />
					</Link>
					</div>
				<div className='navlinks1'>
					<ul className='d-flex'>
						<Link to="/" className="btn btn-primary">HOME</Link>
						<Link to="/feed" className="btn btn-primary">FEED</Link>
						<Link to="/myblogs" className="btn btn-primary">MyBlogs</Link>
						<Link to="/login" className="btn btn-outline-success">LOGIN</Link>
						<Link to="/signup" className="btn btn-warning">SIGNUP</Link>
					</ul>
				</div>
			</nav>
    </>
    );
}

export default Navbar;