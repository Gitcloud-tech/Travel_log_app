import React from "react";

const SignUp = () => {
    return (
            <div className='container'>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">Password</label>
                        <input type="password" className="form-control" id="pass" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPass" placeholder="Password" />
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">SIGN UP</button>


                </form>
            </div>
    )
}

export default SignUp;