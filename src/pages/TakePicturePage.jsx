import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function TakePicturePage({ selectedFrameSrc }) {
  let videoRef = useRef(null);
  let photoRef1 = useRef(null);
  let photoRef2 = useRef(null);
  let photoRef3 = useRef(null);
  let photoRef4 = useRef(null);

  // 사용자 웹캠에 접근
  const getUserCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        let video = videoRef.current;

        video.srcObject = stream;

        video.addEventListener("loadedmetadata", () => {
          video.play();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const width = 600;
  const height = width / (4 / 3);
  const takePicture1 = () => {
    let photo = photoRef1.current;
    let video = videoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, photo.width, photo.height);
  };
  const takePicture2 = () => {
    let photo = photoRef2.current;
    let video = videoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, photo.width, photo.height);
  };
  const takePicture3 = () => {
    let photo = photoRef3.current;
    let video = videoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, photo.width, photo.height);
  };
  const takePicture4 = () => {
    let photo = photoRef4.current;
    let video = videoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, photo.width, photo.height);
  };

  const clearImage1 = () => {
    let photo = photoRef1.current;
    let ctx = photo.getContext("2d");
    ctx.clearRect(0, 0, photo.width, photo.height);
  };
  const clearImage2 = () => {
    let photo = photoRef2.current;
    let ctx = photo.getContext("2d");
    ctx.clearRect(0, 0, photo.width, photo.height);
  };
  const clearImage3 = () => {
    let photo = photoRef3.current;
    let ctx = photo.getContext("2d");
    ctx.clearRect(0, 0, photo.width, photo.height);
  };
  const clearImage4 = () => {
    let photo = photoRef4.current;
    let ctx = photo.getContext("2d");
    ctx.clearRect(0, 0, photo.width, photo.height);
  };

  //카메라 권한 가져오기
  useEffect(() => {
    getUserCamera();
  }, [videoRef]);

  return (
    <div className="flex h-screen w-screen">
      <video
        className="container m-0 -scale-x-100 p-8 pb-10"
        ref={videoRef}
      ></video>

      <div className="flex h-[90vh] w-90 m-0 pt-14 justify-start">
        <div className="flex flex-col h-full gap-[80px]">
          <button
            onClick={takePicture1}
            className="btn btn-primary container btn-lg"
          >
            Take <br></br>Selfie<br></br> 1
          </button>
          <button
            onClick={takePicture2}
            className="btn btn-primary container btn-lg"
          >
            Take <br></br>Selfie<br></br> 2
          </button>
          <button
            onClick={takePicture3}
            className="btn btn-primary container btn-lg"
          >
            Take <br></br>Selfie<br></br> 3
          </button>
          <button
            onClick={takePicture4}
            className="btn btn-primary container btn-lg"
          >
            Take <br></br>Selfie<br></br> 4
          </button>
          <Link to="/" className="btn btn-light container btn-lg p-4">
            이전
          </Link>
        </div>
        <div className="flex flex-col h-full gap-[80px] ml-8">
          <button
            onClick={clearImage1}
            className="btn btn-danger container btn-lg"
          >
            Clear <br></br>Selfie <br></br>1
          </button>
          <button
            onClick={clearImage2}
            className="btn btn-danger container btn-lg"
          >
            Clear <br></br>Selfie<br></br> 2
          </button>
          <button
            onClick={clearImage3}
            className="btn btn-danger container btn-lg"
          >
            Clear <br></br>Selfie<br></br> 3
          </button>
          <button
            onClick={clearImage4}
            className="btn btn-danger container btn-lg"
          >
            Clear <br></br>Selfie <br></br>4
          </button>
          <button className="btn btn-dark container btn-lg p-4">완료</button>
        </div>
      </div>

      <div className="flex fixed top-[-10px] right-2 flex-col gap-1 m-6">
        <canvas
          ref={photoRef1}
          className="w-[290px] h-[185px] -scale-x-100"
        ></canvas>
        <canvas
          ref={photoRef2}
          className="w-[290px] h-[185px] -scale-x-100"
        ></canvas>
        <canvas
          ref={photoRef3}
          className="w-[290px] h-[185px] -scale-x-100"
        ></canvas>
        <canvas
          ref={photoRef4}
          className="w-[290px] h-[185px] -scale-x-100"
        ></canvas>
      </div>

      <div className="z-10 fixed top-[-20px] right-[-70px]">
        <img src={selectedFrameSrc} className="object-contain h-[1000px]"></img>
      </div>
    </div>
  );
}

export default TakePicturePage;
