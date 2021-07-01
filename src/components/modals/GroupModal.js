import React from "react";
import { Modal } from "react-bootstrap";
import "./Modal.css";

const GroupModal = (props) => {
  let arr = [
    {
      text: "Accommodation",
      edit: <i className="far fa-edit edit"></i>,

      delete: <i className="far fa-trash-alt delete"></i>,
      walk: <i className="fas fa-walking walk"></i>,
    },
    {
      text: "Short Walk",
      edit: <i className="far fa-edit edit"></i>,

      delete: <i className="far fa-trash-alt delete"></i>,
      walk: <i className="fas fa-walking walk"></i>,
    },
    {
      text: "Hill Climbing",
      edit: <i className="far fa-edit edit"></i>,

      delete: <i className="far fa-trash-alt delete"></i>,
      walk: <i className="fas fa-walking walk"></i>,
    },
    {
      text: "City",
      edit: <i className="far fa-edit edit"></i>,

      delete: <i className="far fa-trash-alt delete"></i>,
      walk: <i className="fas fa-walking walk"></i>,
    },
  ];
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
          <Modal.Title id="example-modal-sizes-title-sm">Groups</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {arr.map((item, index) => (
            <div className="group-card" key={index}>
              <div className="forth">
                {item.walk}

                <p>{item.text}</p>
              </div>
              <div className="back">
                {item.delete}
                {item.edit}
              </div>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GroupModal;
