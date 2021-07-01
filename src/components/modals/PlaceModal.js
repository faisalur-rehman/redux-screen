import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./Modal.css";
import img from "../../assets/images/img1.jpg";

const PlaceModal = (props) => {
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
          <Modal.Title id="example-modal-sizes-title-sm">Places</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="image">
            <img
              src={img}
              alt=""
              className="text-center rounded-circle"
              width={130}
              height={130}
            />
          </div>
          <h4 className="text-center">Login</h4>
          <Form style={{ width: "60%", margin: "auto" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                // style={{ width: "50%", margin: "auto" }}
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ width: "100%" }}>
              Login
            </Button>
            <p className="text-center">Or</p>
            <Button variant="primary" type="submit" style={{ width: "100%" }}>
              Login with Facebook
            </Button>
          </Form>
          <p className="text-center forgot-password">Forgot Password?</p>
          <p className="register-here">Dont have an account?Register here</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PlaceModal;
