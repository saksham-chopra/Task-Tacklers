import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import RubberBand from "react-reveal/RubberBand";
const Projects = () => {
  return (
    <>
    
      <div className="continer project" id="projects">
      <RubberBand>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Here Are some Top Recent Projects that are live you can check them by clicking the VIEW button below.
          We deal with real-life problems and try to solve them you can also contact us for same .
          
        </p>
        <p style={{ textAlign: "center" }}>(*For more Projects checkout Github account Link given in contact)</p>


        </RubberBand>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN~ Full stack</span>
                  <img
                    src="post1.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Expense MQL
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://expensemql.onrender.com/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN~ Full Stack</span>
                  <img
                    src="post2.png"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">We Chat</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://wechat-fdsr.onrender.com/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Designing</span>
                  <img
                    src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Figma</span>
                  <span className="card-detail-badge">Canva</span>
                  {/* <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">NoSQL</span> */}
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">designing Portal</h5>
                  </div>
                  <a className="ad-btn" href="https://www.instagram.com/uiux.raina/">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;