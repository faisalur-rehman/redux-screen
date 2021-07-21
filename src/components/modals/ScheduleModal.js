import React from "react";
import { Modal } from "react-bootstrap";
import "./Modal.css";

const ScheduleModal = (props) => {
  return (
    <div className="modal">
      <Modal
        {...props}
        // size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ padding: "50px" }}
      >
        <Modal.Body>
          <div className="sort">
            <h4 style={{ color: "blue" }}>
              <i className="far fa-calendar-alt"></i> Schedule Menu
            </h4>
            <p>Schedule Itinerary</p>
            <p>Change Start date</p>
            <p>Move one day</p>
            <p>Add one day</p>
            <p>Delete Schedule</p>
            <p>Rename Schedule</p>
            <p>Edit Schedule</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ScheduleModal;
