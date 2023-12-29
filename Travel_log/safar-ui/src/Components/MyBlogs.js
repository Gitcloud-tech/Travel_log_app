import React from 'react'
import { Link } from 'react-router-dom'



const MyBlogs = () => {
  return (
    <>



      <main className="mt-5 outer-container">

        <div className="container">

          <div className="accordion" id="blog1">
            <div className="accordion-item">
              <h2 className="accordion-header" >
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBlogOne" aria-expanded="true" aria-controls="collapseBlogOne">
                  Blog #1
                </button>
              </h2>
              <div id="collapseBlogOne" className="accordion-collapse collapse show" aria-labelledby="headingBlogOne" data-bs-parent="#blog1">
                <div className="accordion-body">
                  <Link to="/displayblog" className="">View</Link><br />
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                  <Link to="/displayblog">View</Link>

                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                  <Link to="/displayblog">View</Link>
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                  <Link to="/displayblog">View</Link>
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                  <Link to="/displayblog">View</Link>
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>


          </div>
          <br></br>
            <Link to="/add-blog" className="btn btn-outline-warning"> Add Blog</Link>
        </div>
      </main>
    </>
  )
}

export default MyBlogs