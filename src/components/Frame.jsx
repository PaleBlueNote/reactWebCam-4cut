// Frame.jsx
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Frame(props) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSelect = () => {
    props.onSelect(); // Call the onSelect prop to trigger the handleSelect function
  };

  return (
    <div className="card w-18 ">
      <div className="w-full flex items-center justify-center">
        <img
          src={props.image}
          className="card-img-top ml-10"
          alt={props.title}
        ></img>
      </div>
      <div className="card-body flex flex-col items-center justify-center">
        <h5 className="card-title font-extrabold text-2xl">{props.title}</h5>
        <div className="flex">
          <button
            onClick={handleSelect}
            className="btn btn-primary d-flex align-items-center justify-content-center"
          >
            <p className="text-xs m-0">프레임 선택</p>
          </button>
          <button
            onClick={handleShowModal}
            className="btn btn-light d-flex align-items-center justify-content-center"
          >
            <p className="text-xs m-0">자세히보기</p>
          </button>
        </div>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>프레임확인</Modal.Title>
          </Modal.Header>
          <Modal.Body className="flex flex-col items-center justify-center">
            <img
              src={props.image}
              className="w-auto h-auto ml-10"
              alt={props.title}
            ></img>
            <p className="text-3xl font-extrabold">{props.title}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              닫기
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Frame;
