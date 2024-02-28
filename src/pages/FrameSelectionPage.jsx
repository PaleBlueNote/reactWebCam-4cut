// FrameSelectionPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Frame from "../components/Frame";
import "bootstrap/dist/css/bootstrap.min.css";

function FrameSelectionPage({
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

  const handleSelect = (frame) => {
    setSelectedFrameSrc(frame.image);
    setSelectedFrameName(frame.title);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="gap-4 flex justify-center items-center">
        {frames.map((frame, index) => (
          <Frame
            key={index}
            image={frame.image}
            title={frame.title}
            onSelect={() => handleSelect(frame)}
          />
        ))}
      </div>
      <div className="flex justify-center items-stretch mt-4">
        <p className="border-2 rounded-md p-3 text-3xl text-emerald-600 m-0">
          {selectedFrameName}
        </p>
        <Link
          to="/take-picture"
          className="btn btn-success btn-lg ml-4 d-flex align-items-center justify-content-center"
        >
          사진 찍기
        </Link>
      </div>
    </div>
  );
}

export default FrameSelectionPage;
