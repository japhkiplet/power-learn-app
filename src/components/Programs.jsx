import React from "react";
import { Row, Col } from "react-bootstrap";
import pic from "../assets/pic.png";
import { TiTick } from "react-icons/ti";
const Programs = () => {
  return (
    <div>
      <Row className="d-flex col justify-content-center align-items-center">
        <Col>
          <img width="500px" height="90%" src={pic} alt="Image" />
        </Col>
        <Col>
          <h4>Our Program</h4>
          <h3>Our Programs</h3>
          <small className="fs-5">
            We aims to empower African youth with skills, and certifications
            that allow you to navigate the job market with confidence.
          </small>

          <ul className="mb-3">
            <li style={{ listStyle: "none" }} className="mb-2 fs-4">
              <span>
                <TiTick color="blue" />
              </span>
              Elementary training using free data access
            </li>
            <li style={{ listStyle: "none" }} className="mb-2 fs-4">
              <span>
                <TiTick color="blue" />
              </span>
              16 weeks of Self-Paced Learning Management System
            </li>
            <li style={{ listStyle: "none" }} className="mb-2 fs-4">
              <span>
                <TiTick color="blue" />
              </span>
              A variety of courses ranging from Programming to Blockchain
            </li>
            <li style={{ listStyle: "none" }} className="mb-2 fs-4">
              <span>
                <TiTick color="blue" />
              </span>
              Hands on work experience with a proof of work module
            </li>
            <li style={{ listStyle: "none" }} className="mb-2 fs-4">
              <span>
                <TiTick color="blue" />
              </span>
              Peer Based community for assesment evaluation and support
            </li>
          </ul>
          <div className="pt-2">
            <button className="btn btn-info px-2 py-2">Visit Programs</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Programs;
