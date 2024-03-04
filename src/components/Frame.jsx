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
    <div className="card">
      <div className="flex items-center justify-center h-[900px]">
        <img
          src={props.image}
          className="m-4 ml-10 card-img-top h-[900px]"
          alt={props.title}
        ></img>
      </div>
      <div className="flex flex-col items-center justify-center card-body">
        <h5 className="text-2xl font-extrabold card-title">{props.title}</h5>
        <div className="flex">
          <button
            onClick={handleSelect}
            className="btn btn-primary d-flex align-items-center justify-content-center"
          >
            <p className="m-0 text-xs">프레임 선택</p>
          </button>
          <button
            onClick={handleShowModal}
            className="btn btn-light d-flex align-items-center justify-content-center"
          >
            <p className="m-0 text-xs">자세히보기</p>
          </button>
        </div>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>프레임확인</Modal.Title>
          </Modal.Header>
          <Modal.Body className="flex flex-col items-center justify-center">
            <img
              src={props.image}
              className="w-auto h-auto"
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
