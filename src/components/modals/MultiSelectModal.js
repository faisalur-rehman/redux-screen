import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Modal.css";
import { Form } from "react-bootstrap";

const MultiSelectModal = (props) => {
  //   const [editPlaceModal, setEditPlaceModal] = useState(false);
  const [arr, setArr] = useState([
    {
      icon: <i class="fab fa-creative-commons"></i>,
      country: "Afghanistan",
      checked: false,
    },
    {
      icon: <i class="fab fa-creative-commons"></i>,
      country: "Albania",
      checked: false,
    },
    {
      icon: <i class="fab fa-creative-commons"></i>,
      country: "Austrailia",
      checked: false,
    },
  ]);
  console.log(arr);
  return (
    <div className="modal">
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Select Some
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="search">
            <Form.Group controlId="formGroupEmail">
              <Form.Control placeholder="Search" />
            </Form.Group>
            <i className="fas fa-tasks"></i>
          </div>
          {arr.map((item, index) => (
            <div className="country-card" key={index}>
              <div className="country">
                {item.icon}
                <p>{item.country}</p>
              </div>
              <Form.Check
                type="checkbox"
                id="autoSizingCheck2"
                checked={item.checked}
                onChange={() =>
                  setArr((prev) => [...prev, { ...item, checked: true }])
                }
              />
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MultiSelectModal;
