function Article() {
  return (
    <div className="section article">
    <div className="container">
      <h2>Articles & resources</h2>
      <div className="resources">
        <div className="card">
          <img src="/article1.png" alt="resource-image" />
          <div className="text">
            <div className="category">
              <span>Marketing</span>
              <span>/ Nov 22. 2021</span>
            </div>
            <div className="card-title">
              How to customize your advertising banners
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti aliquid.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="/article2.png" alt="resource-image" />
          <div className="text">
            <div className="category">
              <span>Marketing</span>
              <span>/ Nov 22. 2021</span>
            </div>
            <div className="card-title">
              How to stay on top of current marketing trends
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti aliquid.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="/article3.png" alt="resource-image" />
          <div className="text">
            <div className="category">
              <span>Marketing</span>
              <span>/ Nov 22. 2021</span>
            </div>
            <div className="card-title">
              10 must-know Evolving Trends in Mobile Marketing
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti aliquid.
            </p>
          </div>
        </div>
      </div>
      <button className="btn btn-white">More posts</button>
    </div>
  </div>

  )
}

export default Article