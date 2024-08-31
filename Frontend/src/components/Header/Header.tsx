

const Header = () => {
  return (
    <div>
       <div className="hero_area">
 
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <div className="fk_width" id="">
            <div className="custom_menu-btn">
              <button >
                <span className="s-1"> </span>
                <span className="s-2"> </span>
                <span className="s-3"> </span>
              </button>
            </div>
            <div id="myNav" className="overlay">
              <div className="overlay-content">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="package.html">Packages</a>
                <a href="testimonial.html">Testimonial</a>
              </div>
            </div>
          </div>
          <a className="navbar-brand" href="index.html">
            <img src="images/logo.png" alt="" />
          </a>
          <div className="user_option">
            <a href="#">
              <img src="images/user-icon.png" alt="" />
            </a>
            <form className="form-inline my-2 my-lg-0  mb-3 mb-lg-0">
              <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
            </form>
          </div>
        </nav>
      </div>
    </header>






    <section className=" slider_section position-relative">
      <div className="detail-box">
        <div className="row">
          <div className="col-md-8 col-lg-6 mx-auto">
            <h1>
              Book Now <br />
              Ship Travel Agency
            </h1>
            <p>
              dummy text of the printing and typesetting industry. Lorem Ipsum has been thedummy text of the printing and typesetting industry. Lorem Ipsum has been the
            </p>
            <div>
              <a href="#">
                Book now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="img-box">
        <div className="play_btn">
          <a href="#">
            <img src="images/play.png" alt="" />
          </a>
        </div>
        <img src="images/slider-img.png" className="slider-img" alt="" />
      </div>
    </section>

  </div>













<section className="book_section ">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="heading_container">
          <h2>
            Book Now Your Ticket
          </h2>
          <p>
            dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </p>
        </div>
        <form>
          <div className="form-row ">
            <div className="form-group col-lg-4">
              <label >Where</label>
              <input type="text" className="form-control" id="inputAddress1" placeholder="1234 Main St"/>
            </div>
            <div className="form-group col-lg-4">
              <label >To</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="1234 Main St"/>
            </div>
            <div className="form-group col-lg-4">
              <label>Email</label>
              <input type="email" className="form-control" id="inputEmail4"/>
            </div>
          </div>
          <div className="form-row ">
            <div className="form-group col-lg-4">
              <label >Date</label>
              <input type="date" className="form-control" id="inputDate" placeholder="1234 Main St"/>
            </div>
            <div className="form-group col-lg-4">
              <label >Price</label>
              <input type="text" className="form-control" id="inputPrice" placeholder="1234 Main St"/>
            </div>
            <div className="form-group col-lg-4">
              <label >Phone Number</label>
              <input type="text" className="form-control" id="inputPhone"/>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn ">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default Header
