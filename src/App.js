// App.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";

import CelebrityFrameSelectionPage from "./pages/Celebrity/CelebrityFrameSelectionPage";
import CelebrityTakePicturePage from "./pages/Celebrity/CelebrityTakePicturePage";

import CheetoFrameSelectionPage from "./pages/Cheeto/CheetoFrameSelectionPage";
import CheetoTakePicturePage from "./pages/Cheeto/CheetoTakePicturePage";

import DOITBasicFrameSelectionPage from "./pages/DOITBasic/DOITBasicFrameSelectionPage";
import DOITBasicTakePicturePage from "./pages/DOITBasic/DOITBasicTakePicturePage";

import DOITTextFrameSelectionPage from "./pages/DOITText/DOITTextFrameSelectionPage";
import DOITTextTakePicturePage from "./pages/DOITText/DOITTextTakePicturePage";

function App() {
  const [selectedFrameSrc, setSelectedFrameSrc] = useState("");
  const [selectedFrameName, setSelectedFrameName] = useState("");
  const [studentID, setStudentID] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/CelebrityFrame"
          element={
            <CelebrityFrameSelectionPage
              setStudentID={setStudentID}
              setSelectedFrameSrc={setSelectedFrameSrc}
              selectedFrameName={selectedFrameName}
              setSelectedFrameName={setSelectedFrameName}
            />
          }
        />
        <Route
          path="/CelebrityPicture"
          element={
            <CelebrityTakePicturePage
              studentID={studentID}
              selectedFrameSrc={selectedFrameSrc}
            />
          }
        />
        <Route
          path="/CheetoFrame"
          element={
            <CheetoFrameSelectionPage
              setStudentID={setStudentID}
              setSelectedFrameSrc={setSelectedFrameSrc}
              selectedFrameName={selectedFrameName}
              setSelectedFrameName={setSelectedFrameName}
            />
          }
        />
        <Route
          path="/CheetoPicture"
          element={
            <CheetoTakePicturePage
              studentID={studentID}
              selectedFrameSrc={selectedFrameSrc}
            />
          }
        />
        <Route
          path="/DOITBaicFrame"
          element={
            <DOITBasicFrameSelectionPage
              setStudentID={setStudentID}
              setSelectedFrameSrc={setSelectedFrameSrc}
              selectedFrameName={selectedFrameName}
              setSelectedFrameName={setSelectedFrameName}
            />
          }
        />
        <Route
          path="/DOITBasicPicture"
          element={
            <DOITBasicTakePicturePage
              studentID={studentID}
              selectedFrameSrc={selectedFrameSrc}
            />
          }
        />
        <Route
          path="/DOITTextFrame"
          element={
            <DOITTextFrameSelectionPage
              setStudentID={setStudentID}
              setSelectedFrameSrc={setSelectedFrameSrc}
              selectedFrameName={selectedFrameName}
              setSelectedFrameName={setSelectedFrameName}
            />
          }
        />
        <Route
          path="/DOITTextPicture"
          element={
            <DOITTextTakePicturePage
              studentID={studentID}
              selectedFrameSrc={selectedFrameSrc}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
