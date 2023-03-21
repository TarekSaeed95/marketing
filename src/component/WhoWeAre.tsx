function WhoWeAre() {
  return (
    <div className="who-we-are section">
      <div className="container">
        <h2>We’re more than just a MARKETING agency.</h2>
        <div className="boxes">
          <div className="box-container">
            <div
              className="box box1"
              onMouseEnter={(e) => {
                e.currentTarget.firstElementChild?.classList.add("animate");
                e.currentTarget.lastElementChild?.classList.add("animate");
                e.currentTarget.firstElementChild?.classList.remove("fade-out");
                e.currentTarget.lastElementChild?.classList.remove("fade-out");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.firstElementChild?.classList.remove("animate");
                e.currentTarget.lastElementChild?.classList.remove("animate");
                e.currentTarget.firstElementChild?.classList.add("fade-out");
                e.currentTarget.lastElementChild?.classList.add("fade-out");
              }}
            >
              <div className="rect"></div>
              <div className="circle"></div>
            </div>
            <p>/ Branding</p>
            <p>
              Build a strong brand identity and stand out in the market with our
              comprehensive branding solutions that reflect your values and
              vision.
            </p>
          </div>
          <div className="box-container">
            <div className="box box2">
              <div className="before-animation">
                <div className="rect rect1"></div>
                <div className="rect rect1"></div>
                <div className="rect rect1"></div>
                <div className="rect rect2"></div>
                <div className="rect rect2"></div>
                <div className="rect rect2"></div>
              </div>
              <div
                className="after-animation"
                onMouseEnter={(e) => {
                  e.currentTarget.classList.add("animate");
                  e.currentTarget.classList.remove("fade-out");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.classList.add("fade-out");
                  e.currentTarget.classList.remove("animate");
                }}
              >
                <div className="rect3"></div>
                <div className="rect4"></div>
              </div>
            </div>
            <p>/ Web Development</p>
            <p>
              Create a powerful online presence with our custom web development
              solutions that cater to your unique business needs.
            </p>
          </div>
          <div className="box-container">
            <div className="box box3">
              <div className="before-animation">
                <div className="rect rect1"></div>
                <div className="rect rect2"></div>
                <div className="rect rect3"></div>
              </div>
              <div
                className="after-animation"
                onMouseEnter={(e) => {
                  e.currentTarget.classList.add("animate");
                  e.currentTarget.classList.remove("fade-out");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.classList.add("fade-out");
                  e.currentTarget.classList.remove("animate");
                }}
              >
                <div className="rect rect1"></div>
                <div className="circle"></div>
                <div className="rect rect2"></div>
              </div>
            </div>
            <p>/ SEO</p>
            <p>
              {" "}
              Improve your website's visibility and attract more organic traffic
              with our proven search engine optimization strategies.
            </p>
          </div>
          <div className="box-container">
            <div
              className="box box4"
              onMouseEnter={(e) => {
                Array.from(e.currentTarget.firstElementChild.children).map(
                  (child) => {
                    child.classList.add("animate");
                  }
                );
                Array.from(e.currentTarget.firstElementChild.children).map(
                  (child) => {
                    child.classList.remove("fade-out");
                  }
                );
              }}
              onMouseLeave={(e) => {
                Array.from(e.currentTarget.firstElementChild.children).map(
                  (child) => {
                    child.classList.remove("animate");
                  }
                );
                Array.from(e.currentTarget.firstElementChild.children).map(
                  (child) => {
                    child.classList.add("fade-out");
                  }
                );
              }}
            >
              <div className="circle-holder">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <div className="circle circle4"></div>
              </div>
            </div>
            <p>/ SMM</p>
            <p>
              Engage your target audience and build brand loyalty with our
              social media marketing services that drive results.
            </p>
          </div>
          <div className="box-container">
            <div
              className="box box5"
              onMouseEnter={(e) => {
                Array.from(e.currentTarget.children).map((child) => {
                  child.classList.add("animate");
                });
                Array.from(e.currentTarget.children).map((child) => {
                  child.classList.remove("fade-out");
                });
              }}
              onMouseLeave={(e) => {
                Array.from(e.currentTarget.children).map((child) => {
                  child.classList.remove("animate");
                });
                Array.from(e.currentTarget.children).map((child) => {
                  child.classList.add("fade-out");
                });
              }}
            >
              <div className="circle circle1"></div>
              <div className="rect"></div>
              <div className="circle circle2"></div>
            </div>
            <p>/ Business Consulting</p>
            <p>
              Transform your business by tapping into the expertise and insights
              of our seasoned consultants.
            </p>
          </div>
          <div className="box-container">
            <div
              className="box box6"
              onMouseEnter={(e) => {
                e.currentTarget.firstElementChild?.classList.remove("fade-in");
                e.currentTarget.firstElementChild?.classList.add("fade-out");
                e.currentTarget.lastElementChild?.classList.add("fade-in");
                e.currentTarget.lastElementChild?.classList.remove("fade-out");
                e.currentTarget.children[1].classList.add("animate-in");
                e.currentTarget.children[1].classList.remove("animate-out");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.firstElementChild?.classList.add("fade-in");
                e.currentTarget.firstElementChild?.classList.remove("fade-out");
                e.currentTarget.lastElementChild?.classList.remove("fade-in");
                e.currentTarget.lastElementChild?.classList.add("fade-out");
                e.currentTarget.children[1].classList.add("animate-out");
                e.currentTarget.children[1].classList.remove("animate-in");
              }}
            >
              <div className="before-animation">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <div className="circle circle4"></div>
                <div className="circle circle5"></div>
                <div className="circle circle6"></div>
                <div className="circle circle7"></div>
              </div>
              <div className="circle circle-main"></div>
              <div className="after-animation">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
              </div>
            </div>
            <p>/ Tech Support</p>
            <p>
              Get fast and reliable technical support to keep your systems
              running smoothly and minimize downtime.
            </p>
          </div>
        </div>
        <button className="btn btn-white">ALL SERVICES</button>
      </div>
    </div>
  );
}

export default WhoWeAre;
