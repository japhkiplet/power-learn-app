import React from "react";
import Marquee from "react-fast-marquee";
import { RiStarSFill } from "react-icons/ri";
const Courses = () => {
  return (
    <div className="col courses bg-light mb-5">
      <div className="col justify-center  align-items-center">
        <h5 className="text-center">Courses</h5>
        <h3 className="text-center">OUR MODULES</h3>
        <p className="text-center">
          Check out our most poular courses that suit for you. Here you can find
          your favourite one..
        </p>
      </div>
      {/* courses */}
      <Marquee>
        <div className=" justify-center col align-items-center">
          <div className=" row d-flex">
            <div className="card mx-3" style={{ width: "18rem" }}>
              <img
                src="https://powerlearnproject.org/static/media/python.1bde158c511931f9a3a1.png"
                className="card-img-top d-md-none "
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Python Programming</p>
                <div className="d-flex">
                  <div className="d-flex">
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                  </div>
                  4.5k Reviews
                </div>
              </div>
            </div>
            <div className="card mx-3" style={{ width: "18rem" }}>
              <img
                src="https://powerlearnproject.org/static/media/dart.0800f7eba327a3d318ac.png"
                className="card-img-top "
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Dart Programming</h5>
                <div className="d-flex">
                  <div className="d-flex">
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                  </div>
                  2.5k Reviews
                </div>
              </div>
            </div>
            <div className="card mx-3" style={{ width: "18rem" }}>
              <img
                src="https://powerlearnproject.org/static/media/database.4ea9365c15118b1e9371.png"
                className="card-img-top "
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Database</h5>
                <div className="d-flex">
                  <div className="d-flex">
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                  </div>
                  4.1k Reviews
                </div>
              </div>
            </div>
            <div className="card mx-3" style={{ width: "18rem" }}>
              <img
                src="https://powerlearnproject.org/static/media/web_tech.7481ff7fc24316e32ec3.png"
                className="card-img-top "
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Web Technology</h5>
                <div className="d-flex">
                  <div className="d-flex">
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                  </div>
                  6.5k Reviews
                </div>
              </div>
            </div>
            <div className="card mx-3" style={{ width: "18rem" }}>
              <img
                src="https://powerlearnproject.org/static/media/computer_essentials.422b980d0d009eaeae42.png"
                className="card-img-top "
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Computer Essentials</h5>
                <div className="d-flex">
                  <div className="d-flex">
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                  </div>
                  7.5k Reviews
                </div>
              </div>
            </div>
            <div className="card mx-3" style={{ width: "18rem" }}>
              <img
                src="https://powerlearnproject.org/static/media/soft_skills.e60a905d3eb9a8ad7055.png"
                className="card-img-top "
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Entrepreneurship and Personal development(Skills)
                </h5>
                <div className="d-flex">
                  <div className="d-flex">
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                    <RiStarSFill color="maroon" />
                  </div>
                  3.5k Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Courses;
