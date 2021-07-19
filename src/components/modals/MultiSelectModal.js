import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Modal.css";
import { Form } from "react-bootstrap";
import store from "../../store/store";
import { selectOne, selectAll } from "../../store/reducer";
import { useDispatch } from "react-redux";

const MultiSelectModal = (props) => {
  const [show, setShow] = useState(true);
  const [, setRerender] = useState("");
  const dispatch = useDispatch();

  // console.log("store", store.getState());
  function handleChange(i) {
    setRerender(Math.random() * 100000);

    dispatch(selectOne({ id: props.index, index: i }));
  }
  function handleSelectAll(i) {
    setShow(!show);
    dispatch(selectAll({ show, id: props.index }));
  }

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
            <i
              className={`fas fa-tasks ${show ? "" : "color"}`}
              onClick={handleSelectAll}
            ></i>
          </div>
          {store
            .getState()
            [props.mainIndex].places[props.index].detail.map(
              (element, index) => (
                <div className="country-card" key={index}>
                  <div className="country">
                    {element.icon}
                    <p>{element.country}</p>
                  </div>
                  <Form.Check
                    type="checkbox"
                    id="autoSizingCheck2"
                    checked={element.checked}
                    onChange={() => handleChange(index)}
                  />
                </div>
              )
            )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MultiSelectModal;
