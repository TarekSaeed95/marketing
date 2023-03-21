function LandingPage() {
  return (
    <div className="home-page">
    <div className="container">
      <div className="text">
        <div className="title">We’re a marketing agency from CANADA</div>
        <p>
          We specialize in solving hard-to-solve marketing problems using a
          unique blend of marketing communication, analytics and
          technologies.
        </p>
        <div className="btn-holder">
          <button className="btn btn-red">Contact us</button>
          <button className="btn btn-white">Our Projects</button>
        </div>
      </div>
      <div className="images-holder">
        <div className="vectors">
          <div className="rects">
            <div className="rect"></div>
            <div className="rect-two"></div>
          </div>
          <div className="triangle">
            <div className="circle"></div>
          </div>
        </div>
        <img src="Control-V-(14).png" alt="" />
        <img src="Control-V-(1).png" alt="" />
      </div>
    </div>
  </div>
  )
}

export default LandingPage