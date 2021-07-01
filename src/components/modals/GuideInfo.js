import React from "react";
import { Modal } from "react-bootstrap";
import "./Modal.css";

const GuideInfo = (props) => {
  return (
    <div className="modal">
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ padding: "50px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Guide Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p className="attribute">Name</p>
            <p>Florence</p>
          </div>
          <div>
            <p className="attribute">Descrption</p>
            <p>Guide</p>
          </div>
          <div>
            <p className="attribute">Featured</p>
            <p>No</p>
          </div>
          <div>
            <p className="attribute">Ratings</p>
            <p>0.0</p>
          </div>
          <div>
            <p className="attribute">Country</p>
            <p>Italy</p>
          </div>
          <div>
            <p className="attribute">City</p>
            <p>Rome</p>
          </div>
          <div>
            <p className="attribute">Total Ratings Received</p>
            <p>0</p>
          </div>
          <div>
            <p className="attribute">Last Read</p>
            <p>Tommorrow</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GuideInfo;
