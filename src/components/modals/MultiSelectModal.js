import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./Modal.css";
import { Form } from "react-bootstrap";
import store from "../../store/store";
import { selectOne } from "../../store/reducer";
import { useDispatch } from "react-redux";

const MultiSelectModal = (props) => {
  const [show] = useState(true);
  const [mainIndex, setMainIndex] = useState();
  const [, setRerender] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let index = store
      .getState()
      .findIndex((element) => element.id === props.id);
    setMainIndex(index);
    //eslint-disable-next-line
  }, []);

  function handleChange(mainIndex, i) {
    setRerender(Math.random() * 100000);
    dispatch(selectOne({ id: props.index, checkedIndex: i, mainIndex }));
  }
  console.log("ok", props.mainIndex, props.index);
  return (
    <div className="modal">
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="search">
            <Form.Group controlId="formGroupEmail">
              <Form.Control placeholder="Search" />
            </Form.Group>
            <i
              className={`fas fa-tasks ${show ? "" : "color"}`}
              // onClick={handleSelectAll}
            ></i>
          </div>
          {mainIndex &&
            store.getState()[mainIndex].places[props.index].detail.map(
              (element, index) =>
                element.checked && (
                  <div className="country-card" key={index}>
                    <div className="country">
                      {element.icon}
                      <p>{element.country}</p>
                    </div>
                    <Form.Check
                      type="checkbox"
                      id="autoSizingCheck2"
                      checked={element.checked}
                      onChange={() => handleChange(props.mainIndex, index)}
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
