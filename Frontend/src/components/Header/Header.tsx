import "./Header.css";


const Header = () => {
  return (
    <div>
      
    <nav className="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light" id="templateux-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html"><span className="text-danger">Red</span>Planet</a>
        <div className="site-menu-toggle js-site-menu-toggle  ml-auto"  data-aos="fade" data-toggle="collapse" data-target="#templateux-navbar-nav" aria-controls="templateux-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
            </div>
        

        <div className="collapse navbar-collapse" id="templateux-navbar-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="#section-home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#section-about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#section-team">Team</a></li>
            <li className="nav-item"><a className="nav-link" href="#section-rooms">Rooms</a></li>
            <li className="nav-item"><a className="nav-link" href="#section-menus">Menus</a></li>
            <li className="nav-item"><a className="nav-link" href="#section-events">Events</a></li>
            <li className="nav-item"><a className="nav-link" href="#section-contact">Contact</a></li>
            <li className="nav-item cta-btn ml-xl-2 ml-lg-2 ml-md-0 ml-sm-0 ml-0"><a className="nav-link" href="#" target="_blank"><span className="pb_rounded-4 px-4 rounded">Get Started</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
    <section className="site-hero overlay" style={{ backgroundImage: `url(src/assets/images/hero_5.jpg)` }} data-stellar-background-ratio="0.5" id="section-home">
        <div className="container">
          <div className="row site-hero-inner justify-content-center align-items-center">
            <div className="col-md-10 text-center" data-aos="fade-up">
              <h1 className="heading">Stay With Us &amp; Relax</h1>
            </div>
          </div>
        </div>

        <a className="mouse smoothscroll" href="#next" >
          <div className="mouse-icon">
            <span className="mouse-wheel"></span>
          </div>
        </a>
      </section>
    </div>
  )
}

export default Header
