import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./Modal.css";
import img from "../../assets/images/img1.jpg";

const LoginModal = (props) => {
  return (
    <div className="modal">
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ padding: "50px" }}
      >
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
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <Button
              variant="primary"
              style={{ width: "100%" }}
              className="my-2"
            >
              Login
            </Button>
            <p className="text-center">Or</p>
            <Button variant="primary" style={{ width: "100%" }}>
              Login with Facebook
            </Button>
          </Form>
          <p className="text-center forgot-password">Forgot Password?</p>
          <p className="register-here">Dont have an account?Register here</p>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default LoginModal;
