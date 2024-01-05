import React,{useState} from "react"
import './Auth.css'
import axios from 'axios'

const SignUp = () => {

    const [user, setUser] = useState({
        fullName : '',
        username : '',
        email : '',
        mobile : '',
        socialInsta : '',
        socialYoutube : '',
        pass:'',
        confirmPass:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await axios.post('http://localhost:8080/user', user);
            
            console.log('User registered successfully:', result.data);
        } catch (error) {
            
            console.error('Error registering user:', error.message);
        }
    };

    return (
            <div className='container d-flex'>
                 <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <b>Full Name:</b>
                        <input
                            type="text"
                            className="form-control"
                            name="fullName"
                            placeholder="Enter Full Name"
                            value={user.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <b>Username: </b>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Enter Username"
                            value={user.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <b>Email:</b>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <b>Mobile:</b>
                        <input
                            type="number"
                            className="form-control"
                            name="mobile"
                            placeholder="Enter mobile no."
                            value={user.mobile}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <b>Instagram:</b>
                        <input
                            type="text"
                            className="form-control"
                            name="socialInsta"
                            placeholder="Enter Instagram profile link"
                            value={user.socialInsta}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <b>Youtube:</b>
                        <input
                            type="text"
                            className="form-control"
                            name="socialYoutube"
                            placeholder="Enter Youtube Channel link"
                            value={user.socialYoutube}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="form-group">
                        <b>Password:</b>
                        <input
                            type="password"
                            className="form-control"
                            name="pass"
                            placeholder="Enter Password"
                            value={user.pass}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <b>Confirm Password:</b>
                        <input
                            type="text"
                            className="form-control"
                            name="confirmPass"
                            placeholder="Confirm your password"
                            value={user.confirmPass}
                            onChange={handleChange}
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">
                        SIGN UP
                    </button>
                </form>
            </div>
    )
}

export default SignUp;