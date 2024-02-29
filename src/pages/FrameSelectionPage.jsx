// FrameSelectionPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Frame from "../components/Frame";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function FrameSelectionPage({
  studentID,
  setStudentID,
  setSelectedFrameSrc,
  selectedFrameName,
  setSelectedFrameName,
}) {
  const frames = [
    { image: "/frames/문상훈.png", title: "문상훈 프레임" },
    { image: "/frames/차은우.png", title: "차은우 프레임" },
    { image: "/frames/앤톤.png", title: "앤톤 프레임" },
    { image: "/frames/윈터.png", title: "윈터 프레임" },
    { image: "/frames/김채원.png", title: "김채원 프레임" },
    { image: "/frames/카리나.png", title: "카리나 프레임" },
  ];
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSelect = (frame) => {
    setSelectedFrameSrc(frame.image);
    setSelectedFrameName(frame.title);
  };

  const handleIDChange = () => {
    const inputElement = document.getElementById("studentID");
    if (inputElement) {
      setStudentID(inputElement.value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-4">
        {frames.map((frame, index) => (
          <Frame
            key={index}
            image={frame.image}
            title={frame.title}
            onSelect={() => handleSelect(frame)}
          />
        ))}
      </div>
      <div className="flex items-stretch justify-center mt-4">
        <p className="p-3 m-0 text-3xl border-2 rounded-md text-emerald-600">
          {selectedFrameName}
        </p>
        <button
          onClick={handleShowModal}
          className="ml-4 btn btn-success btn-lg d-flex align-items-center justify-content-center"
        >
          선택 완료
        </button>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>학번 입력</Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex flex-col items-center justify-center">
          <input
            className="w-full p-4 m-2 text-center text-7xl"
            id="studentID"
            autoComplete="off"
          ></input>
          <p className="m-0 text-xs text-stone-400">
            위 학번은 이후 4컷 사진 다운로드에 활용됩니다.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex items-center justify-center w-full">
            <Link
              to="/take-picture"
              onClick={handleIDChange}
              className="w-full ml-4 btn btn-success btn-lg d-flex align-items-center justify-content-center"
            >
              사진 찍기
            </Link>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FrameSelectionPage;
