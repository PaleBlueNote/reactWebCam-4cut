import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import QRCode from "qrcode.react";
import { useNavigate } from "react-router-dom";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_ID,
  secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
  region: process.env.REACT_APP_REGION,
});

const s3 = new AWS.S3();

function TakePicturePage({ studentID, selectedFrameSrc }) {
  const videoRef = useRef(null);
  const photoRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [s3URL, setS3URL] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  let navigate = useNavigate();

  useEffect(() => {
    getUserCamera();
  }, []);

  const getUserCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        const video = videoRef.current;
        video.srcObject = stream;

        video.addEventListener("loadedmetadata", () => {
          video.play();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const width = 1200;
  const height = width / 1.56;

  const takePicture = (index) => {
    const photo = photoRefs[index].current;
    const video = videoRef.current;

    photo.width = width;
    photo.height = height;

    const ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, photo.width, photo.height);
  };

  const clearImage = (index) => {
    const photo = photoRefs[index].current;
    const ctx = photo.getContext("2d");
    ctx.clearRect(0, 0, photo.width, photo.height);
  };

  const captureAndSaveImage = () => {
    const captureDiv = document.getElementById("capture-div");
    html2canvas(captureDiv).then((canvas) => {
      canvas.toBlob((blob) => {
        uploadToS3(blob);
      });
    });
    setShowModal(true);
  };

  const uploadToS3 = (blob) => {
    const params = {
      Bucket: "doit4cutbucket", // Replace with your S3 bucket name
      Key: `${studentID}.png`,
      Body: blob,
      ContentType: "image/png", // Adjust the content type based on your file type
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Image uploaded success");

        setS3URL(data.Location);
      }
    });
  };

  const handleSuccess = () => {
    navigate("/");
  };

  return (
    <div className="flex w-screen h-screen">
      <video
        className="container p-8 pb-10 m-0 -scale-x-100"
        ref={videoRef}
        style={{ transform: "scaleX(-1)" }}
      ></video>

      <div className="flex h-[90vh] w-90 m-0 pt-14 justify-start">
        <div className="flex flex-col h-full gap-[80px] px-3">
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="flex gap-2">
              <button
                onClick={() => takePicture(index)}
                className="container btn btn-primary btn-lg"
              >
                Take <br />
                Selfie
                <br /> {index + 1}
              </button>
              <button
                onClick={() => clearImage(index)}
                className="container btn btn-danger btn-lg"
              >
                Clear <br />
                Selfie
                <br /> {index + 1}
              </button>
            </div>
          ))}
          <div className="flex gap-2">
            <Link to="/" className="container p-4 btn btn-light btn-lg">
              이전
            </Link>
            <button
              onClick={captureAndSaveImage}
              className="container p-4 btn btn-dark btn-lg"
            >
              완료
            </button>
          </div>
        </div>
      </div>

      <div
        className="flex fixed right-[20px] top-[44px] w-[330px] h-[992px]"
        id="capture-div"
      >
        <div className="flex fixed top-[50px] right-[36px] flex-col gap-2">
          {photoRefs.map((photoRef, index) => (
            <canvas
              key={index}
              ref={photoRef}
              className="w-[300px] h-[200px] -scale-x-100"
            ></canvas>
          ))}
        </div>

        <div className="z-10 fixed top-[40px] right-[20px]">
          <img
            src={selectedFrameSrc}
            className="object-contain h-[1000px]"
            alt="Selected Frame"
          ></img>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>이미지 다운로드 QR</Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex flex-col items-center justify-center">
          <QRCode value={s3URL} size={256} />
        </Modal.Body>
        <Modal.Footer>
          <div className="flex items-center justify-center w-full">
            <button
              onClick={handleSuccess}
              className="w-full ml-4 btn btn-success btn-lg d-flex align-items-center justify-content-center"
            >
              처음으로
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TakePicturePage;
