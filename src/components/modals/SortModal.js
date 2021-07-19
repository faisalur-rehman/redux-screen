import React from "react";
import { Modal } from "react-bootstrap";
import "./Modal.css";

const SortModal = (props) => {
  function handleSort(sortBy) {
    props.handleSortSubmit(sortBy);
    props.onHide();
  }
  return (
    <div className="modal">
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ padding: "50px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">Sort</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="sort">
            <p onClick={() => handleSort("name")}>Sort by Name</p>
            <p onClick={() => handleSort("distance")}>Sort by Distance</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SortModal;
