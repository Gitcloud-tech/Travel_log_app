import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/MyBlogs.css'
// import SliderSidebar from './SliderSidebar'


const MyBlogs = () => {
  return (
    <>
      <div className='d-flex'>

        {/* <SliderSidebar /> */}


        <main className="container1">

            <div className="accordion" id="blog1">
              <div className="accordion-item">
                <h2 className="accordion-header" >
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBlogOne" aria-expanded="true" aria-controls="collapseBlogOne">
                    Blog #1
                  </button>
                </h2>
                <div id="collapseBlogOne" className="accordion-collapse collapse show" aria-labelledby="headingBlogOne" data-bs-parent="#blog1">
                  <div className="accordion-body">
                    <div className="main-parent mt-2">
                      <div className="main-box1">
                        <h3>Goa Trip</h3>    {/* title / city / Country */}
                      </div>
                      <div className="main-box2">
                        <b>Start date: </b> <span>2/12/2023</span>

                      </div>
                      <div className="main-box3">
                        <b>End date: </b> <span>5/12/2023</span>

                      </div>
                      <div className="main-box4">
                        <b>Members: </b> <span>4</span>

                      </div>
                      <div className="main-box5">
                        <b>Total cost: </b> <span>20000</span>

                      </div>
                      <div className="main-box6">
                        <b>Transportation: </b> <span>By Road</span>
                      </div>
                    </div>

                    <Link className="btn btn-primary m-2" to="/logs">View</Link>
                    <Link to="/createLogs" className="btn btn-success">Create Logs</Link>


                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBlogTwo" aria-expanded="false" aria-controls="collapseBlogTwo">
                    Blog #2
                  </button>
                </h2>
                <div id="collapseBlogTwo" className="accordion-collapse collapse" aria-labelledby="headingBlogTwo" data-bs-parent="#blog1">
                  <div className="accordion-body">
                    <div className="main-parent mt-2">
                      <div className="main-box1">
                        <h3>Goa Trip</h3>    {/* title / city / Country */}
                      </div>
                      <div className="main-box2">
                        <b>Start date: </b> <span>2/12/2023</span>

                      </div>
                      <div className="main-box3">
                        <b>End date: </b> <span>5/12/2023</span>

                      </div>
                      <div className="main-box4">
                        <b>Members: </b> <span>4</span>

                      </div>
                      <div className="main-box5">
                        <b>Total cost: </b> <span>20000</span>

                      </div>
                      <div className="main-box6">
                        <b>Transportation: </b> <span>By Road</span>
                      </div>
                    </div>

                    <Link className="btn btn-primary m-2" to="/logs">View</Link>
                    <Link to="/createLogs" className="btn btn-success">Create Logs</Link>




                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBlogThree" aria-expanded="false" aria-controls="collapseBlogThree">
                    Blog #3
                  </button>
                </h2>
                <div id="collapseBlogThree" className="accordion-collapse collapse" aria-labelledby="headingBlogThree" data-bs-parent="#blog1">
                  <div className="accordion-body">
                    <div className="main-parent mt-2">
                      <div className="main-box1">
                        <h3>Goa Trip</h3>    {/* title / city / Country */}
                      </div>
                      <div className="main-box2">
                        <b>Start date: </b> <span>2/12/2023</span>

                      </div>
                      <div className="main-box3">
                        <b>End date: </b> <span>5/12/2023</span>

                      </div>
                      <div className="main-box4">
                        <b>Members: </b> <span>4</span>

                      </div>
                      <div className="main-box5">
                        <b>Total cost: </b> <span>20000</span>

                      </div>
                      <div className="main-box6">
                        <b>Transportation: </b> <span>By Road</span>
                      </div>
                    </div>

                    <Link className="btn btn-primary m-2" to="/displayblog">View</Link>
                    <Link to="/createLogs" className="btn btn-success">Create Logs</Link>

                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBlogFour" aria-expanded="false" aria-controls="collapseBlogFOur">
                    Blog #4
                  </button>
                </h2>
                <div id="collapseBlogFour" className="accordion-collapse collapse" aria-labelledby="headingBlogFour" data-bs-parent="#blog1">
                  <div className="accordion-body">

                    <div className="main-parent mt-2">
                      <div className="main-box1">
                        <h3>Goa Trip</h3>    {/* title / city / Country */}
                      </div>
                      <div className="main-box2">
                        <b>Start date: </b> <span>2/12/2023</span>

                      </div>
                      <div className="main-box3">
                        <b>End date: </b> <span>5/12/2023</span>

                      </div>
                      <div className="main-box4">
                        <b>Members: </b> <span>4</span>

                      </div>
                      <div className="main-box5">
                        <b>Total cost: </b> <span>20000</span>

                      </div>
                      <div className="main-box6">
                        <b>Transportation: </b> <span>By Road</span>
                      </div>
                    </div>

                    <Link className="btn btn-primary m-2" to="/displayblog">View</Link>
                    <Link to="/createLogs" className="btn btn-success">Create Logs</Link>

                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBlogFive" aria-expanded="false" aria-controls="collapseBlogFive">
                    Blog #5
                  </button>
                </h2>
                <div id="collapseBlogFive" className="accordion-collapse collapse" aria-labelledby="headingBlogFive" data-bs-parent="#blog1">
                  <div className="accordion-body">
                    <div className="main-parent mt-2">
                      <div className="main-box1">
                        <h3>Goa Trip</h3>    {/* title / city / Country */}
                      </div>
                      <div className="main-box2">
                        <b>Start date: </b> <span>2/12/2023</span>

                      </div>
                      <div className="main-box3">
                        <b>End date: </b> <span>5/12/2023</span>

                      </div>
                      <div className="main-box4">
                        <b>Members: </b> <span>4</span>

                      </div>
                      <div className="main-box5">
                        <b>Total cost: </b> <span>20000</span>

                      </div>
                      <div className="main-box6">
                        <b>Transportation: </b> <span>By Road</span>
                      </div>
                    </div>

                    <Link className="btn btn-primary m-2" to="/displayblog">View</Link>
                    <Link to="/createLogs" className="btn btn-success">Create Logs</Link>


                  </div>
                </div>
              </div>
            </div>
         
          <Link className='btn btn-success mt-4' to="/addblog">Add a Blog</Link>
        </main >
      </div >
    </>
  )
}

export default MyBlogs