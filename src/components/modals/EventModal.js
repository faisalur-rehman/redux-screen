import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Modal.css";
import ScheduleModal from "./ScheduleModal";

const EventModal = (props) => {
  const [scheduleModal, setScheduleModal] = useState(false);
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
              <i
                className="far fa-calendar-alt"
                onClick={() => setScheduleModal(true)}
              ></i>{" "}
              Event Menu
            </h4>
            <p>Show on Map</p>
            <p>Show Details</p>
            <p>Edit Event</p>
            <p>Delete Event</p>
            <p>Add Event After</p>
            <p>Add Event Before</p>
          </div>
        </Modal.Body>
      </Modal>
      <ScheduleModal
        show={scheduleModal}
        onHide={() => setScheduleModal(false)}
      />
    </div>
  );
};

export default EventModal;
