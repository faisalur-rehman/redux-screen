import React from "react";
import { Modal } from "react-bootstrap";
import "./Modal.css";

const PlaceModal = (props) => {
  return (
    <div className="modal">
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <p className="text-center">{props.name}</p>
          <div className="image">
            <img
              src={props.img}
              alt=""
              className="text-center rounded"
              width={150}
              height={150}
            />
          </div>
          <div className="text-center places-functionality">
            <p>Center in Map</p>
            <p>Show Street View</p>
            <p>Show in Google Maps</p>
            <p>Show places attribute</p>
            <p>Show places Info</p>
            <p>Go to Yelp</p>
            <p>Go to foursquare</p>
            <p>Set as current location</p>
            <p>Update Place</p>
            <p>Add place</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PlaceModal;
