import React, { useState } from "react";
import LoginModal from "../modals/LoginModal";
import GroupModal from "../modals/GroupModal";
import "./VerticalSidebar.css";
import { Button } from "react-bootstrap";

const VerticalSidebar = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [guideInfoModal, setGuideInfoModal] = useState(false);
  const [groupModal, setGroupModal] = useState(false);
  return (
    <>
      <div className="vertical-sidebar">
        <div>
          <p>Search Guides</p>
          <hr />
        </div>
        <div>
          <p onClick={() => setLoginModal(true)}>Login</p>
          <hr />
        </div>
        <div>
          <p>Register</p>
          <hr />
        </div>
        <div>
          <p>Forget Password</p>
          <hr />
        </div>
        <div>
          <p onClick={() => setGroupModal(true)}>Groups</p>
          <hr />
        </div>
        <div>
          <p>Guide Info</p>
          <hr />
        </div>
        <div>
          <p>New Guide</p>
          <hr />
        </div>
        <div>
          <p>Copy Guide</p>
          <hr />
        </div>
        <div>
          <p>Chapters</p>
          <hr />
        </div>
        <div>
          <p>Upload Images</p>
          <hr />
        </div>
      </div>
      <LoginModal show={loginModal} onHide={() => setLoginModal(false)} />
      <GroupModal show={groupModal} onHide={() => setGroupModal(false)} />
    </>
  );
};

export default VerticalSidebar;
